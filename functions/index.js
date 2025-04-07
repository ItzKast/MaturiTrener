const functions = require("firebase-functions"); // Or specific v2 imports if you prefer
const { logger } = require("firebase-functions"); // Use v2 logger
const admin = require("firebase-admin");

// Initialize Admin SDK ONCE (conditionally)
if (admin.apps.length === 0) { // Check if already initialized
    admin.initializeApp();
}
const db = admin.firestore();
// --- End Initial Setup ---


// --- DAILY QUEST RESET/GENERATION FUNCTION ---

// Define quest templates SERVER-SIDE (Simplified version - no 'new_tests' check here)
const dailyQuestTemplatesServer = [
    { type: "complete_tests", target: 1, description: "Dokonči 1 test" },
    { type: "complete_tests", target: 2, description: "Dokonči 2 testy" },
    { type: "complete_tests", target: 3, description: "Dokonči 3 testy" },
    { type: "flawless_tests", target: 1, description: "Dokonči 1 test bez chyby" },
    { type: "flawless_tests", target: 2, description: "Dokonči 2 testy bez chyby" },
    { type: "earn_xp", target: 10, description: "Získej 10 XP" },
    { type: "earn_xp", target: 20, description: "Získej 20 XP" },
    { type: "earn_xp", target: 30, description: "Získej 30 XP" },
    { type: "unique_subjects", target: 2, description: "Dokonči testy ze 2 různých předmětů" },
    { type: "unique_subjects", target: 3, description: "Dokonči testy ze 3 různých předmětů" },
    { type: "unique_tests", target: 2, description: "Dokonči 2 různé testy (předmět/okruh)" },
    { type: "unique_tests", target: 3, description: "Dokonči 3 různé testy (předmět/okruh)" },
    // Note: 'new_tests' is harder server-side without complex user history query
];

// Server-side helper to generate 3 quests
function generateQuestsServerSide() {
    const availableTemplates = [...dailyQuestTemplatesServer];
    const selectedQuests = [];
    const todayStr = new Date().toISOString().split('T')[0];
    let attempts = 0;
    while (selectedQuests.length < 3 && attempts < 20 && availableTemplates.length > 0) {
        attempts++;
        const randomIndex = Math.floor(Math.random() * availableTemplates.length);
        const template = availableTemplates.splice(randomIndex, 1)[0];
        const newQuest = {
            ...template,
            id: `${template.type}_${template.target}_${todayStr}`,
            currentProgress: 0,
            isCompleted: false,
        };
        selectedQuests.push(newQuest);
        // Optional: Remove duplicate types:
        // availableTemplates = availableTemplates.filter(t => t.type !== template.type);
    }
    return selectedQuests;
}

// Define the scheduled function using V2 syntax
exports.resetAndGenerateDailyQuests = functions.region("europe-west1") // Choose your region
    .pubsub.schedule("0 0 * * *") // DAILY at midnight
    .timeZone("Europe/Prague") // <<< IMPORTANT: VERIFY YOUR TIMEZONE
    .onRun(async (context) => {

        logger.info("Starting DAILY quest reset/generation function.");
        const usersRef = db.collection("users");
        const batchSize = 400;
        let documentsProcessed = 0;
        const todayStr = new Date().toISOString().split('T')[0];

        try {
            const querySnapshot = await usersRef.get();

            if (querySnapshot.empty) {
                logger.info("No users found. Exiting function.");
                return null;
            }

            let batch = db.batch();

            querySnapshot.forEach((doc) => {
                // Generate NEW quests for the upcoming day
                const newQuests = generateQuestsServerSide();

                // Prepare the update payload - this OVERWRITES the existing dailyQuests map
                const updatePayload = {
                    dailyQuests: {
                        generatedDate: todayStr,
                        quests: newQuests,
                        subjectsToday: [], // Reset daily tracking
                        testsTodayIds: [], // Reset daily tracking
                        bonusXPAwarded: false // Reset bonus flag
                    }
                };

                // Add update to the batch
                batch.update(doc.ref, updatePayload);
                documentsProcessed++;

                // Commit batch periodically
                if (documentsProcessed % batchSize === 0) {
                    logger.info(`Committing batch of ${batchSize} quest resets...`);
                    batch.commit();
                    batch = db.batch();
                }
            });

            // Commit final batch
            if (documentsProcessed % batchSize !== 0) {
                logger.info(`Committing final batch of ${documentsProcessed % batchSize} quest resets...`);
                await batch.commit();
            }

            logger.info(`Successfully initiated reset/generation of daily quests for ${documentsProcessed} users.`);
            return null;

        } catch (error) {
            logger.error("Error resetting/generating daily quests:", error);
            throw new Error(`Failed to process daily quests. Error: ${error.message}`);
        }
    });
/**
 * Scheduled Cloud Function (V2 Syntax) to reset 'weeklyXP'
 */
exports.resetWeeklyXPV2 = onSchedule({
    schedule: "1 0 * * 1", // Your schedule (e.g., 00:01 every Monday)
    timeZone: "Europe/Prague", // Your timezone
    // Optional V2 settings (can often omit for simple functions)
    // region: "europe-west1", // Specify region if needed
    // memory: "512MiB",
    // timeoutSeconds: 300,
}, async (event) => { // The handler function takes an 'event' argument

    logger.info("Starting weekly XP reset function execution (V2)."); // Use logger.info

    const usersRef = db.collection("users");
    const batchSize = 400;
    let documentsProcessed = 0;

    try {
        const querySnapshot = await usersRef.get();

        if (querySnapshot.empty) {
            logger.info("No users found. Exiting function.");
            return null;
        }

        let batch = db.batch();

        querySnapshot.forEach((doc) => {
            batch.update(doc.ref, { weeklyXP: 0 });
            documentsProcessed++;
            if (documentsProcessed % batchSize === 0) {
                logger.info(`Committing batch of ${batchSize} updates...`);
                batch.commit(); // Don't necessarily need await here unless the loop depends on it
                batch = db.batch();
            }
        });

        if (documentsProcessed % batchSize !== 0) {
            logger.info(`Committing final batch of ${documentsProcessed % batchSize} updates...`);
            await batch.commit(); // Wait for the final one
        }

        logger.info(`Successfully initiated reset of weeklyXP for ${documentsProcessed} users (V2).`);
        return null;

    } catch (error) {
        logger.error("Error resetting weekly XP (V2):", error); // Use logger.error
        // Re-throwing might be better for Cloud Monitoring Error Reporting
        throw new Error(`Failed to reset weekly XP (V2). Error: ${error.message}`);
    }
});

// Note: The function name in exports is now 'resetWeeklyXPV2'
// Firebase will deploy it with this name.