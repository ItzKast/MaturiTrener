// Import V2 Functions SDK modules
const { onSchedule } = require("firebase-functions/v2/scheduler");
const { logger } = require("firebase-functions"); // Use the new logger
const admin = require("firebase-admin");

// Initialize Admin SDK (no changes needed here)
admin.initializeApp();
const db = admin.firestore();

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