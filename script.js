const GITHUB_RAW_BASE_URL = 'https://raw.githubusercontent.com/ItzKast/MaturiTrener/main/data/';

const dataFileConfig = {
    "Programování": {
        "Základní pojmy z algoritmizace a programování": "DataProgramovani.csv",
        "Vývoj a druhy programovacích jazyků, vývojové prostředí Visual Studio": "DataVyvojJazyku.csv",
        "C# strukturované příkazy větvení, složený příkaz": "DataCSharpVetveni.csv",
        "C# strukturované příkazy cyklů": "DataCyklu.csv",
        "C# jednoduché datové typy, řetězec; operace": "JednoducheDatove.csv",
        "C# strukturované datové typy (kolekce)": "StrukturovaneDatove.csv",
        "C# práce se soubory a dialogovými okny": "DataDialog.csv",
        "C# Windows Forms Application, grafické ovládací prvky, události": "DataPrvky.csv",
        "C# ladění programu, druhy chyb, ošetřování výjimek": "DataChyby.csv",
        "C# namespace Drawing – nástroje pro programování grafiky": "DataDrawing.csv",
        "C# metody, jmenné prostory": "DataMetody.csv",
        "C# základy OOP": "DataOOP.csv",
        "Souhrnné opakování": null 
    },
    "Počítačové sítě": {
        "Topologie sítí": "DataTopologie.csv",
        "Komunikace v síti": "DataKomunikace.csv",
        "Pasivní prvky": "DataPasivni.csv",
        "Aktivní prvky": "DataAktivni.csv",
        "Návrh a realizace sítě": "DataNavrh.csv",
        "Bezdrátové technologie": "DataBezdratove.csv",
        "Připojení počítače k lokální síti": "DataLokalni.csv",
        "Připojení k internetu": "DataInternet.csv",
        "Souhrnné opakování": null
    },
    "Elektronika": {
        "Základy digitální techniky": "DataZaklady.csv",
        "Integrované polovodičové prvky": "DataPolovodice.csv",
        "Řídící jednotka CM-530": "DataCM530.csv",
        "Mikroprocesor Arduino": "DataArduino.csv",
        "Programování mikroprocesoru Arduino": "DataArduinoProgramovani.csv",
        "Počítač": "DataPocitac.csv",
        "Procesor": "DataProcesor.csv",
        "Základní deska": "DataZakladniDeska.csv",
        "Polovodičové paměti": "DataPameti.csv",
        "Zařízení pro uložení dat": "DataDisky.csv",
        "Grafický a zobrazovací systém": "DataGrafika.csv",
        "Digitalizace obrazu a tisk": "DataTisk.csv",
        "Napájecí zdroje": "DataZdroje.csv",
        "Diferenciální parametry tranzistoru": "DataTranzistor.csv",
        "Operační zesilovače": "DataOperacni.csv",
        "Přenos informací": "DataInformace.csv",
        "Zesilovače": "DataZesilovace.csv",
        "Frekvenční filtr typu dolní propust": "DataFFDolni.csv",
        "Frekvenční filtr typu horní propust": "DataFFHorni.csv",
        "Sériový a paralelní obvod RL, RC": "DataRLC.csv",
        "Souhrnné opakování": null
    },
    "Automatizace": {
        "Regulační obvody": "otazky_tema_1.csv",
        "Technické prostředky": "otazky_tema_2.csv",
        "Logická zařízení": "otazky_tema_3.csv",
        "Druhy výkresů v AT": "otazky_tema_4.csv",
        "Elektrické rozvody v průmyslu": "otazky_tema_5.csv",
        "Regulační pohony a orgány": "otazky_tema_6.csv",
        "Programovatelný automat": "otazky_tema_7.csv",
        "Relé impulzní": "otazky_tema_8.csv",
        "Převodníky a přizpůsobovací členy": "otazky_tema_9.csv",
        "Výstavba regulačního obvodu": "otazky_tema_10.csv",
        "Malé řídící systémy": "otazky_tema_11.csv",
        "Prvky používané v obvodech AT": "otazky_tema_12.csv", 
        "Senzory - rozdělení": "otazky_tema_13.csv", 
        "Analogové a binární senzory": "otazky_tema_14.csv",
        "PLC": "otazky_tema_15.csv", 
        "Sekvenční logické obvody": "otazky_tema_16.csv",
        "Měření neelektrických veličin": "otazky_tema_17.csv",
        "Typy regulačních obvodů": "otazky_tema_18.csv",
        "Roboty a jejich aplikace": "otazky_tema_19.csv",
        "Grafické znázornění stavů": "otazky_tema_20.csv",
        "Souhrnné opakování": null
    },
    "Čeština": {
        "Karel Čapek - R.U.R.": "cestina_karel_capek_rur.json",
        "William Shakespeare - Hamlet": "cestina_william_shakespeare_hamlet.json",
        "William Shakespeare - Romeo a Julie": "cestina_william_shakespeare_romeo_a_julie.json"
    }
};
// --- Data Structure for Questions ---
let data = {};
for (const subject in dataFileConfig) {
    if (dataFileConfig.hasOwnProperty(subject)) {
        data[subject] = {};
        for (const topic in dataFileConfig[subject]) {
            if (dataFileConfig[subject].hasOwnProperty(topic)) {
                // Initialize appropriately: Array for CSV, maybe null/object for JSON initially?
                const filename = dataFileConfig[subject][topic];
                if (filename && filename.endsWith('.json')) {
                    data[subject][topic] = null; // Placeholder for the loaded JSON object
                } else if (filename && filename.endsWith('.csv')) {
                    data[subject][topic] = [];   // Array for CSV questions
                } else {
                     data[subject][topic] = []; // Default or for summary
                }
            }
        }
    }
}

// --- Achievement Definitions ---
const achievementLevels = {
    xpCollector: {
        name: "XP sběratel 🏆",
        description: "Získej celkem {value} XP.", // {value} will be replaced with the next level's XP threshold
        levels: [100, 250, 500, 1000, 2500, 5000, 10000, 20000, 50000, 100000],
        unit: "XP"
    },
    unstoppable: {
        name: "Nezastavitelný 🔥",
        description: "Dokonči úspěšně test ({value}+ dní) v řadě.", // {value} is the next streak target
        levels: [3, 7, 14, 30, 50, 75, 100, 150, 200, 365],
        unit: "dní"
    },
    flawless: {
        name: "Bezchybník 💯",
        description: "Dokonči {value} testů bez jediné chyby.", // {value} is the next flawless test target
        levels: [5, 10, 20, 50, 100, 200, 350, 500, 750, 1000],
        unit: "testů"
    },
    winningStreak: {
        name: "Vítězná série 🥇",
        description: "Dokonči {value} testů bez chyby v řadě za sebou.", // {value} is the next consecutive flawless test target
        levels: [3, 5, 10, 20, 30, 50, 75, 100, 150, 200],
        unit: "testů"
    },
    topicMaster: {
        name: "Znalec témat 📚",
        description: "Dokonči alespoň jeden test z {value} různých okruhů.", // {value} is the next unique topic target
        levels: [2, 4, 6, 8, 10, 12, 15, 18, 20, 25],
        unit: "témat"
    },
    earlyBird: {
        name: "Ranní ptáče 🌅",
        description: "Dokonči {value} testů mezi 5:00 a 8:00 ráno.", // {value} is the next early test target
        levels: [1, 3, 7, 14, 30, 50, 75, 100, 150, 200],
        unit: "testů"
    },
    nightOwl: {
        name: "Večerní sova 🌙",
        description: "Dokonči {value} testů mezi 21:00 a 1:00 v noci.", // {value} is the next late test target
        levels: [1, 3, 7, 14, 30, 50, 75, 100, 150, 200],
        unit: "testů"
    },
    marathoner: {
        name: "Maratonec 🏃",
        description: "Dokonči {value} testů během jednoho dne.", // {value} is the next daily test target
        levels: [2, 5, 10, 15, 20, 30, 50, 75, 100, 150],
        unit: "testů"
    }
};

// --- Firebase Configuration & Initialization ---
const firebaseConfig = {
  apiKey: "AIzaSyCsaY8QZCiozpDnLbpiid3a6ilom7rp4Bk",
  authDomain: "maturitrener.firebaseapp.com",
  projectId: "maturitrener",
  storageBucket: "maturitrener.firebasestorage.app",
  messagingSenderId: "485827643986",
  appId: "1:485827643986:web:838563f26c0fafda9c6d8b",
  measurementId: "G-FLVEDE8H82"
};
/**
 * Fetches and parses all data (CSV or JSON) from the configured URLs.
 * @returns {Promise<void>} A promise that resolves when all data is loaded and parsed.
 */
async function loadAllDataFromURLs() {
    console.log("Starting to load data from URLs...");
    const fetchPromises = [];

    for (const subject in dataFileConfig) {
        for (const topic in dataFileConfig[subject]) {
            const filename = dataFileConfig[subject][topic];

            if (filename) {
                const url = GITHUB_RAW_BASE_URL + filename;
                const isJson = filename.toLowerCase().endsWith('.json');

                const promise = fetch(url)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status} for ${url}`);
                        }
                        // Parse based on file type
                        return isJson ? response.json() : response.text();
                    })
                    .then(content => {
                        if (isJson) {
                            // Store the parsed JSON object directly
                            if (data[subject]) { // Ensure subject exists
                                data[subject][topic] = content;
                                console.log(`Parsed JSON for ${subject} - ${topic}`);
                            } else {
                                console.warn(`Subject ${subject} not pre-initialized in data structure.`);
                            }
                        } else {
                            // Parse CSV text using existing function
                            parseCSV(content, subject, topic);
                        }
                    })
                    .catch(error => {
                        console.error(`Failed to load or parse ${url}:`, error);
                        if (data[subject] && data[subject].hasOwnProperty(topic)) {
                            // Set to null or empty array on error to indicate failure
                            data[subject][topic] = isJson ? null : [];
                        }
                    });
                fetchPromises.push(promise);
            }
        }
    }

    await Promise.all(fetchPromises);
    console.log("Finished loading and parsing all data.");
    // console.log("Final data structure:", data); // Optional check
}

let db;
let auth;
let currentUser = null; // Holds the UID of the logged-in user
let submitBtn = null; // Reference to the submit button during a test


// Calendar state variables
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// --- DOM Element References --- (Declared globally for access within functions)
let header, main, dashboardSection, testSection, progressSection, testContainer,
    generateTestBtn, modal, closeModalBtn, backToTestsModalBtn, resultCorrect,
    resultTotal, resultPercentage, subjectSelect, topicSelect, noQuestionsMessage,
    authLink, progressTableBody, subjectStatsContainer, loginSection, loginForm,
    emailInput, passwordInput, loginBtn, registerBtn, loginMessage,
    calendarGrid, currentMonthDisplay, prevMonthBtn, nextMonthBtn,
    testsTodayEl, correctAnswersEl, successRateEl, dayStreakEl, totalXpEl, achievementListEl, themeToggleButton; // Added elements for stats


// --- Wait for DOM to Load ---
document.addEventListener('DOMContentLoaded', async () => {
    applyInitialTheme();
    // Get DOM elements safely after DOM is ready
    header = document.querySelector('header');
    main = document.querySelector('main');
    dashboardSection = document.getElementById('dashboard-section');
    testSection = document.getElementById('test-section');
    progressSection = document.getElementById('progress-section');
    testContainer = document.getElementById('test-container');
    generateTestBtn = document.getElementById('generate-test');
    modal = document.getElementById('test-completion-modal');
    closeModalBtn = modal.querySelector('.close'); // More specific selector
    backToTestsModalBtn = document.getElementById('back-to-tests-modal');
    resultCorrect = document.getElementById('result-correct');
    resultTotal = document.getElementById('result-total');
    resultPercentage = document.getElementById('result-percentage');
    subjectSelect = document.getElementById('subject-select');
    topicSelect = document.getElementById('topic-select');
    noQuestionsMessage = document.getElementById('no-questions-message');
    authLink = document.getElementById('auth-link');
    progressTableBody = document.getElementById('progress-table-body');
    subjectStatsContainer = document.getElementById('subject-stats');
    loginSection = document.getElementById('login-section');
    loginForm = document.getElementById('login-form');
    emailInput = document.getElementById('email');
    passwordInput = document.getElementById('password');
    loginBtn = document.getElementById('login-btn');
    registerBtn = document.getElementById('register-btn');
    loginMessage = document.getElementById('login-message');
    calendarGrid = document.getElementById('calendar-grid');
    currentMonthDisplay = document.getElementById('current-month');
    prevMonthBtn = document.getElementById('prev-month');
    nextMonthBtn = document.getElementById('next-month');
    achievementListEl = document.getElementById('achievement-list');
    themeToggleButton = document.getElementById('theme-toggle-btn');
    // Stat elements
    testsTodayEl = document.getElementById('tests-today');
    correctAnswersEl = document.getElementById('correct-answers');
    successRateEl = document.getElementById('success-rate');
    dayStreakEl = document.getElementById('day-streak'); // Get element for stats section too
    totalXpEl = document.getElementById('total-xp'); // Get element for stats section too

    await loadAllDataFromURLs();
    // --- Initialize Firebase ---
    try {
        if (typeof firebase === 'undefined') {
            throw new Error("Firebase library not loaded!");
        }
        firebase.initializeApp(firebaseConfig);
        db = firebase.firestore();
        auth = firebase.auth();
        console.log("Firebase Initialized");

        initializeSubjects(); // Populate subject dropdown

        // --- Attach Event Listeners ---
        setupEventListeners();

        // --- Firebase Auth Listener ---
        auth.onAuthStateChanged(async (user) => { // Make listener async
            if (user) {
                currentUser = user.uid;
                console.log('Auth State Changed: Logged in as', user.email);
                authLink.textContent = "Odhlásit se";
                showDashboard(); // Show dashboard first
                await loadUserDataFromFirestore(currentUser, db); // Load data and THEN update calendar
            } else {
                currentUser = null;
                console.log('Auth State Changed: Logged out');
                authLink.textContent = "Přihlásit se";
                clearUserDataUI(); // Clear displayed stats
                showLogin(); // Show login screen
                generateCalendar(currentYear, currentMonth, db); // Generate empty calendar
            }
        });

    } catch (error) {
        console.error("Error initializing Firebase or setting up:", error);
        alert("Došlo k chybě při inicializaci aplikace. Zkontrolujte konzoli pro více detailů.");
        // Disable parts of the UI if needed
        if(loginSection) loginSection.innerHTML = '<h1>Chyba načítání aplikace</h1><p>Nelze se připojit k Firebase.</p>';
        if(dashboardSection) dashboardSection.style.display = 'none';
        if(testSection) testSection.style.display = 'none';
        if(progressSection) progressSection.style.display = 'none';
    }
}); // End DOMContentLoaded

// --- Firebase Data Functions ---

/**
 * Fetches user data from Firestore, initializing if it doesn't exist.
 * @param {string} uid - The user's ID.
 * @param {firebase.firestore.Firestore} db - The Firestore instance.
 * @returns {Promise<object|null>} A promise resolving to the user data object or null on error.
 */
async function getUserData(uid, db) {
    if (!uid || !db) {
        console.warn("getUserData called without uid or db instance.");
        return null;
    }
    try {
        const docRef = db.collection("users").doc(uid);
        const doc = await docRef.get();

        if (doc.exists) {
            const data = doc.data();
            // Ensure essential structures exist after retrieval
            data.progress = data.progress || {};
            data.achievements = data.achievements || {};
            data.activity = data.activity || {};
            data.completedTopics = data.completedTopics || []; // Should be stored as array
            console.log("Fetched user data:", data);
            return data;
        } else {
            console.log("No user document found for uid:", uid, ". Creating default.");
            // Create and return a default user data structure
            const defaultUserData = {
                testsToday: 0,
                correctAnswers: 0, // Consider if this should be total correct ever or today's
                progress: {},
                totalTestsCompleted: 0,
                averageSuccessRate: 0,
                dayStreak: 0,
                totalXP: 0,
                lastCompletedTestDate: null, // Stores date string of last >80% test
                flawlessTestCount: 0,
                winningStreakCount: 0,
                completedTopics: [], // Store as array in Firestore
                achievements: { // Initialize all achievements to level 0
                    xpCollector: 0, unstoppable: 0, flawless: 0, winningStreak: 0,
                    topicMaster: 0, earlyBird: 0, nightOwl: 0, marathoner: 0,
                    earlyBirdCount: 0, // Specific counts if needed
                    nightOwlCount: 0
                 },
                activity: {} // Activity log for calendar { year: { month: { day: count } } }
            };
            // Save the default data for the new user
            await saveUserData(uid, defaultUserData, db); // Use saveUserData to ensure correct format
            return defaultUserData;
        }
    } catch (error) {
        console.error("Error getting user document:", error);
        return null; // Return null on error
    }
}
function applyInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const themeToggleBtn = document.getElementById('theme-toggle-btn'); // Get button inside function too

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-mode');
        if (themeToggleBtn) themeToggleBtn.textContent = '☀️'; // Sun icon for dark mode
    } else {
        document.body.classList.remove('dark-mode');
        if (themeToggleBtn) themeToggleBtn.textContent = '🌙'; // Moon icon for light mode
    }
}
function toggleTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn'); // Get button inside function
    const isDarkMode = document.body.classList.toggle('dark-mode'); // Toggle and check result

    if (isDarkMode) {
        localStorage.setItem('theme', 'dark');
        if (themeToggleBtn) themeToggleBtn.textContent = '☀️'; // Sun icon
    } else {
        localStorage.setItem('theme', 'light');
        if (themeToggleBtn) themeToggleBtn.textContent = '🌙'; // Moon icon
    }
}

/**
 * Saves user data to Firestore, ensuring correct data types.
 * @param {string} uid - The user's ID.
 * @param {object} data - The user data object to save.
 * @param {firebase.firestore.Firestore} db - The Firestore instance.
 * @returns {Promise<void>}
 */
async function saveUserData(uid, data, db) {
    if (!uid || !db) {
        console.error("saveUserData called without uid or db instance!");
        return;
    }

    // --- Data Sanitization/Formatting before Saving ---
    // Ensure completedTopics is an Array
    if (data.completedTopics instanceof Set) {
        data.completedTopics = Array.from(data.completedTopics);
    } else if (!Array.isArray(data.completedTopics)) {
        console.warn("completedTopics was not a Set or Array, saving as empty array.");
        data.completedTopics = [];
    }

    // Ensure activity is a valid object
    if (typeof data.activity !== 'object' || data.activity === null) {
        console.warn("Activity data structure incorrect, resetting.");
        data.activity = {};
    }
     // Ensure achievements is a valid object
     if (typeof data.achievements !== 'object' || data.achievements === null) {
         console.warn("Achievements data structure incorrect, resetting.");
         data.achievements = {}; // Or initialize with defaults if preferred
     }
     // Ensure progress is a valid object
     if (typeof data.progress !== 'object' || data.progress === null) {
         console.warn("Progress data structure incorrect, resetting.");
         data.progress = {};
     }


    try {
        // Use set with merge:true to update or create the document
        await db.collection("users").doc(uid).set(data, { merge: true });
        console.log("User document successfully written/merged!");
    } catch (error) {
        console.error("Error writing user document:", error);
        // Consider notifying the user about the save failure
        alert("Chyba při ukládání dat. Zkuste to prosím znovu.");
    }
}
async function loadUserDataFromFirestore(uid, db) {
    console.log("Attempting to load data for user:", uid);
    if (!uid || !db) {
        console.error("loadUserDataFromFirestore: Missing UID or DB instance.");
        return; // Exit if essential parameters are missing
    }

    try {
        let userData = await getUserData(uid, db); // Fetch data (this function now handles defaults if doc doesn't exist)

        if (userData) {
            console.log("User data loaded:", userData);
            const today = new Date();
            const todayDateString = today.toDateString();
            let needsSave = false; // Flag to check if we need to save updated daily stats

            console.log("Before Daily Reset Check:", {
                lastActivity: userData.lastActivityDate,
                today: todayDateString,
                testsToday: userData.testsToday,
                correctToday: userData.correctAnswersToday
            });

            // --- Daily Reset Check ---
            // Check if the last recorded activity date is different from today
            if (userData.lastActivityDate !== todayDateString) {
                console.log(`New day detected (Last: ${userData.lastActivityDate}, Today: ${todayDateString}). Resetting daily stats.`);
                userData.testsToday = 0;
                userData.correctAnswersToday = 0; // Reset today's correct answers counter
                userData.lastActivityDate = todayDateString;
                needsSave = true;
            }
            userData.completedTopics = new Set(userData.completedTopics || []);

            if (needsSave) {
                console.log("Saving updated daily stats after reset...");
                // Ensure the Set is converted back to Array before saving
                const dataToSave = { ...userData, completedTopics: Array.from(userData.completedTopics) };
                await saveUserData(uid, dataToSave, db);
                console.log("Daily stats saved.");
                // Note: userData object in memory is already updated.
            }

            // --- Update UI Elements ---
            // Update all relevant UI sections with the fetched (and potentially reset) data           
            updateStatisticsSection(userData); // Updates top dashboard cards and progress section summaries
            updateDashboard(userData);         // Updates subject progress cards
            updateProgressSection(userData);   // Updates the detailed progress table
            updateAchievementsUI(userData);
            await generateCalendar(currentYear, currentMonth, db); 

            console.log("UI updated after loading user data.");

        } else {
            // This case should technically be handled by getUserData returning defaults,
            // but we keep a fallback log here.
            console.warn('loadUserDataFromFirestore: getUserData returned null/undefined unexpectedly.');
            clearUserDataUI(); // Clear UI elements to show logged-out state
            await generateCalendar(currentYear, currentMonth, db); // Generate empty calendar
        }
    } catch (error) {
        console.error("Error in loadUserDataFromFirestore:", error);
        alert("Nastala chyba při načítání uživatelských dat.");
        // Optionally clear UI or show specific error message
        clearUserDataUI();
    }
}
function updateAchievementsUI(userData) {
    if (!achievementListEl) return; // Check if element exists

    achievementListEl.innerHTML = ''; // Clear previous items

    const achievementsData = userData?.achievements;
    let noAchievementsLi = achievementListEl.querySelector('.no-achievements'); // Get placeholder

    // Hide placeholder if there are achievements
    if (!noAchievementsLi) {
        noAchievementsLi = document.createElement('li');
        noAchievementsLi.classList.add('no-achievements');
        noAchievementsLi.style.display = 'none'; // Hide by default
        noAchievementsLi.textContent = 'Zatím žádné úspěchy. Dokonči nějaké testy!';
        achievementListEl.appendChild(noAchievementsLi);
    }
    const hasAchievements = achievementsData &&
                            Object.keys(achievementsData).length > 0 &&
                            Object.values(achievementsData).some(level => typeof level === 'number' && level > 0); // Check if at least one level > 0


    if (!hasAchievements) {
        noAchievementsLi.style.display = 'block'; // Show placeholder
        console.log("No achievements to display or all are level 0.");
        return;
    }
    noAchievementsLi.style.display = 'none'; // Hide placeholder if there are achievements


    // Helper to get current value based on achievement key
    const getCurrentValue = (key) => {
        switch (key) {
            case 'xpCollector':   return userData?.totalXP || 0;
            case 'unstoppable':   return userData?.dayStreak || 0;
            case 'flawless':      return userData?.flawlessTestCount || 0;
            case 'winningStreak': return userData?.winningStreakCount || 0;
            case 'topicMaster':   return (userData?.completedTopics instanceof Set ? userData.completedTopics.size : (userData?.completedTopics?.length || 0)); // Handle Set or Array
            case 'earlyBird':     return achievementsData?.earlyBirdCount || 0;
            case 'nightOwl':      return achievementsData?.nightOwlCount || 0;
            case 'marathoner':    return userData?.testsToday || 0; 
            default:              return 0;
        }
    };

    // Iterate through the defined achievement levels
    for (const [key, definition] of Object.entries(achievementLevels)) {
        const currentLevel = achievementsData[key] || 0; // User's current level for this achievement
        const currentValue = getCurrentValue(key);
        const maxLevel = definition.levels.length;
        const unit = definition.unit;
        const descriptionTemplate = definition.description || "Popis chybí.";

        // Determine next level threshold and progress
        let nextLevelThreshold = Infinity;
        let prevLevelThreshold = 0; // Threshold for the start of the current level
        let progressPercent = 0;
        let valueText = `${currentValue} ${unit}`;
        let tooltipText = '';

        if (currentLevel < maxLevel) {
            nextLevelThreshold = definition.levels[currentLevel]; // Threshold to reach next level (index = currentLevel)
            if (currentLevel > 0) {
                prevLevelThreshold = definition.levels[currentLevel - 1]; // Threshold of the current level (index = currentLevel - 1)
            }
             const range = nextLevelThreshold - prevLevelThreshold;
             const currentProgressInLevel = currentValue - prevLevelThreshold;
             // Calculate percentage, ensuring range > 0 and capping at 100
             progressPercent = range > 0 ? Math.max(0, Math.min(100, Math.round((currentProgressInLevel / range) * 100))) : (currentValue >= nextLevelThreshold ? 100 : 0);
             valueText = `<span class="current">${currentValue}</span> / <span class="next">${nextLevelThreshold} ${unit}</span>`;
 
             // *** Set Tooltip for next level ***
             tooltipText = descriptionTemplate.replace('{value}', nextLevelThreshold);

        } else {
            // Max level reached
            progressPercent = 100;
            valueText = `<span class="max">MAX ${unit}</span>`; // Or just show total value
            tooltipText = `Maximální úroveň dosažena! (${descriptionTemplate.replace('{value}', finalThreshold)})`;
        }

        // Create List Item
        const li = document.createElement('li');
        li.dataset.tooltip = tooltipText;

        // Extract icon (simple approach, might need refinement)
        const nameParts = definition.name.split(' ');
        const icon = nameParts.length > 1 ? nameParts.pop() : '⭐'; // Use last part or default
        const name = nameParts.join(' ');

        li.innerHTML = `
            <div class="achievement-header">
                <span class="achievement-icon">${icon}</span>
                <span class="achievement-name">${name}</span>
            </div>
            <div class="achievement-details">
                <div class="achievement-level">Úroveň ${currentLevel} / ${maxLevel}</div>
                ${currentLevel < maxLevel ? `
                <div class="achievement-progress">
                    <div class="progress-bar">
                        <div class="progress-value" style="width: ${progressPercent}%;"></div>
                    </div>
                    <div class="achievement-value">${valueText}</div>
                </div>
                ` : `
                 <div class="achievement-value">${valueText}</div>
                `}
            </div>
        `;
        achievementListEl.appendChild(li);
    }
}
// --- Authentication Functions ---

/**
 * Handles user registration.
 * @param {firebase.auth.Auth} authInstance - The Firebase Auth instance.
 */
async function registerUserHandler(authInstance) {
    if (!authInstance || !emailInput || !passwordInput || !loginMessage) return;
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // Basic validation
    if (!email || !password) {
        loginMessage.textContent = "Prosím zadejte email i heslo.";
        return;
    }
    if (password.length < 6) {
        loginMessage.textContent = "Heslo musí mít alespoň 6 znaků.";
        return;
    }

    loginMessage.textContent = "Registruji..."; // Feedback
    try {
        await authInstance.createUserWithEmailAndPassword(email, password);
        // NOTE: onAuthStateChanged will handle the login flow after successful registration
        loginMessage.textContent = "Registrace proběhla úspěšně. Přihlašuji...";
        // Optional: Clear form
        // loginForm.reset();
    } catch (error) {
        console.error("Registration error:", error);
        loginMessage.textContent = "Chyba registrace: " + mapAuthError(error); // Use helper for user-friendly message
    }
}

/**
 * Handles user login.
 * @param {firebase.auth.Auth} authInstance - The Firebase Auth instance.
 */
async function loginUserHandler(authInstance) {
     if (!authInstance || !emailInput || !passwordInput || !loginMessage) return;
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
        loginMessage.textContent = "Prosím zadejte email i heslo.";
        return;
    }

    loginMessage.textContent = "Přihlašuji..."; // Feedback
    try {
        await authInstance.signInWithEmailAndPassword(email, password);
        // NOTE: onAuthStateChanged will handle the UI update after successful login
        loginMessage.textContent = "Přihlášení proběhlo úspěšně.";
         // Optional: Clear form
         // loginForm.reset();
    } catch (error) {
        console.error("Login error:", error);
        loginMessage.textContent = "Chyba přihlášení: " + mapAuthError(error); // User-friendly message
    }
}

/**
 * Handles user logout.
 * @param {firebase.auth.Auth} authInstance - The Firebase Auth instance.
 */
async function logoutUserHandler(authInstance) {
    if (!authInstance) return;
    try {
        await authInstance.signOut();
        // NOTE: onAuthStateChanged will handle the UI update
        console.log("User signed out successfully.");
    } catch (error) {
        console.error("Sign out error:", error);
        alert("Chyba při odhlašování.");
    }
}

/**
 * Maps Firebase Auth error codes to user-friendly messages (Czech).
 * @param {Error} error - The Firebase Auth error object.
 * @returns {string} A user-friendly error message.
 */
function mapAuthError(error) {
    switch (error.code) {
        case 'auth/invalid-email':
            return 'Neplatný formát emailu.';
        case 'auth/user-disabled':
            return 'Tento uživatelský účet byl deaktivován.';
        case 'auth/user-not-found':
            return 'Uživatel s tímto emailem nebyl nalezen.';
        case 'auth/wrong-password':
            return 'Nesprávné heslo.';
        case 'auth/email-already-in-use':
            return 'Tento email je již registrován.';
        case 'auth/weak-password':
            return 'Heslo je příliš slabé (musí mít alespoň 6 znaků).';
        case 'auth/operation-not-allowed':
            return 'Přihlášení tímto způsobem není povoleno.';
        case 'auth/network-request-failed':
            return 'Chyba sítě. Zkontrolujte připojení k internetu.';
        default:
            return error.message; // Fallback to the default message
    }
}

// --- UI Update & Navigation Functions ---

function showLogin() {
    if(loginSection) loginSection.style.display = 'flex';
    if(dashboardSection) dashboardSection.style.display = 'none';
    if(testSection) testSection.style.display = 'none';
    if(progressSection) progressSection.style.display = 'none';
    if(loginMessage) loginMessage.textContent = ''; // Clear any previous messages
    if(loginForm) loginForm.reset(); // Clear form fields
}

function showDashboard() {
    if(loginSection) loginSection.style.display = 'none';
    if(dashboardSection) dashboardSection.style.display = 'block';
    if(testSection) testSection.style.display = 'none';
    if(progressSection) progressSection.style.display = 'none';
}

function showTestSection() {
     if(loginSection) loginSection.style.display = 'none';
     if(dashboardSection) dashboardSection.style.display = 'none';
     if(testSection) testSection.style.display = 'block';
     if(progressSection) progressSection.style.display = 'none';
}

function showProgressSection() {
     if(loginSection) loginSection.style.display = 'none';
     if(dashboardSection) dashboardSection.style.display = 'none';
     if(testSection) testSection.style.display = 'none';
     if(progressSection) progressSection.style.display = 'block';
}

/**
 * Updates ALL statistics displays (Dashboard cards, Progress section summary).
 * @param {object | null} userData - The user data object or null for default state.
 */
function updateStatisticsSection(userData) {
    // Default values if userData is null or missing properties
    const testsToday = userData?.testsToday || 0;
    const correctToday = userData?.correctAnswersToday || 0; // Using the daily count
    const rate = userData?.averageSuccessRate || 0;
    const streak = userData?.dayStreak || 0;
    const xp = userData?.totalXP || 0;

    // --- Dashboard Card Elements ---
    // MAKE SURE THESE IDs MATCH YOUR HTML EXACTLY
    const dashTestsTodayEl = document.getElementById('tests-today');
    const dashCorrectAnswersEl = document.getElementById('correct-answers');
    const dashSuccessRateEl = document.getElementById('success-rate');

    // --- Log the values being used for the dashboard card ---
    console.log(`Updating Dashboard Stats - testsToday: ${testsToday}, correctToday: ${correctToday}, rate: ${rate}%`);

    if (dashTestsTodayEl) {
        dashTestsTodayEl.textContent = testsToday;
    } else {
        console.warn("Element with ID 'tests-today' not found for dashboard.");
    }
    if (dashCorrectAnswersEl) {
        dashCorrectAnswersEl.textContent = correctToday; // Display today's correct answers
    } else {
         console.warn("Element with ID 'correct-answers' not found for dashboard.");
    }
    if (dashSuccessRateEl) {
        dashSuccessRateEl.textContent = `${rate}%`;
    } else {
         console.warn("Element with ID 'success-rate' not found for dashboard.");
    }

    const progressDayStreakEl = document.getElementById('day-streak');
    const progressTotalXpEl = document.getElementById('total-xp');

    if (progressDayStreakEl) progressDayStreakEl.textContent = streak;
    if (progressTotalXpEl) progressTotalXpEl.textContent = xp;

    console.log("UI Statistics Updated:", { testsToday, correctToday, rate, streak, xp });
}


/**
 * Updates the subject progress cards on the dashboard.
 * @param {object | null} userData - The user data object, or null for default state.
 */
function updateDashboard(userData) {
    if (!subjectStatsContainer) return;
    subjectStatsContainer.innerHTML = ''; // Clear previous cards

    if (!userData || !userData.progress || Object.keys(userData.progress).length === 0) {
        console.log("No user data or progress to display on dashboard subjects.");
        // Optionally display a message
         const noProgressMsg = document.createElement('p');
         noProgressMsg.textContent = "Zatím žádný pokrok v předmětech.";
         noProgressMsg.style.gridColumn = '1 / -1'; // Span full width if in grid
         noProgressMsg.style.textAlign = 'center';
         subjectStatsContainer.appendChild(noProgressMsg);
        return;
    }

    // Generate subject cards
    for (const subject in data) { // Iterate through defined subjects to ensure order/all are shown
         const subjectData = userData.progress[subject] || { testsCompleted: 0, successRate: 0 }; // Default if no progress yet
         const progressPercentage = subjectData.successRate || 0;
         const testsCompleted = subjectData.testsCompleted || 0;

        const card = document.createElement("div");
        card.classList.add("subject-card");
        card.setAttribute('data-subject', subject); // Use the subject name for navigation

        const title = document.createElement("h3");
        title.classList.add("subject-title");
        title.textContent = subject;
        card.appendChild(title);

        const progressContainer = document.createElement("div");
        progressContainer.classList.add("subject-progress");

        const progressBar = document.createElement("div");
        progressBar.classList.add("progress-bar");
        const progressValue = document.createElement("div");
        progressValue.classList.add("progress-value");
        // Ensure correct initial width even if 0
        progressValue.style.width = `${Math.max(0, progressPercentage)}%`;
        progressBar.appendChild(progressValue);
        progressContainer.appendChild(progressBar);

        const progressText = document.createElement("div");
        progressText.classList.add("progress-text");
        progressText.innerHTML = `<span>${progressPercentage}%</span> <span>${testsCompleted} testů</span>`;
        progressContainer.appendChild(progressText);

        card.appendChild(progressContainer);

        // Add event listener for navigation
        card.addEventListener('click', function () {
            const clickedSubject = this.getAttribute('data-subject');
            if (subjectSelect) subjectSelect.value = clickedSubject; // Pre-select subject
            populateTopics(clickedSubject); // Populate topics
            showTestSection(); // Navigate to test section
        });

        subjectStatsContainer.appendChild(card);
    }
}

/**
 * Updates the detailed progress table in the 'Statistiky' section.
 * @param {object | null} userData - The user data object, or null for default state.
 */
function updateProgressSection(userData) {
    if (!progressTableBody) return;
    progressTableBody.innerHTML = ''; // Clear previous rows

    // Update summary stats if elements exist
    const progressDayStreakEl = document.getElementById('day-streak');
    const progressTotalXpEl = document.getElementById('total-xp');
    if(progressDayStreakEl) progressDayStreakEl.textContent = userData?.dayStreak || 0;
    if(progressTotalXpEl) progressTotalXpEl.textContent = userData?.totalXP || 0;


    if (!userData || !userData.progress || Object.keys(userData.progress).length === 0) {
        console.log("No user data or progress to display in progress table.");
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 4;
        cell.textContent = 'Zatím nebyly dokončeny žádné testy.';
        cell.style.textAlign = 'center';
        cell.style.padding = '1rem';
        row.appendChild(cell);
        progressTableBody.appendChild(row);
        return;
    }

    // Generate table rows for subjects with progress
    for (const subject in userData.progress) {
        const subjectData = userData.progress[subject];
        const testsCompleted = subjectData.testsCompleted || 0;
        const correctAnswers = subjectData.correctAnswers || 0;
        const successRate = subjectData.successRate || 0;
        const totalQuestionsAnswered = subjectData.totalQuestionsAnswered || 0;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td style="padding: 0.75rem;">${subject}</td>
            <td style="text-align: center; padding: 0.75rem;">${testsCompleted}</td>
            <td style="text-align: center; padding: 0.75rem;">${correctAnswers}/${totalQuestionsAnswered}</td>
            <td style="text-align: center; padding: 0.75rem;">${successRate}%</td>
        `;
        progressTableBody.appendChild(row);
    }
}

/**
 * Clears user-specific data from the UI, typically called on logout.
 */
 function clearUserDataUI() {
    // Reset dashboard stats
    updateStatisticsSection(null); // Pass null for default/zero state

    // Clear subject cards
    if(subjectStatsContainer) subjectStatsContainer.innerHTML = '<p style="grid-column: 1 / -1; text-align: center;">Pro zobrazení pokroku se přihlaste.</p>';

    // Clear progress table
    if(progressTableBody) {
        progressTableBody.innerHTML = '';
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 4;
        cell.textContent = 'Pro zobrazení statistik se přihlaste.';
        cell.style.textAlign = 'center';
        cell.style.padding = '1rem';
        row.appendChild(cell);
        progressTableBody.appendChild(row);
    }

    // Reset test section if needed (might happen automatically on navigation)
    if(testContainer) testContainer.innerHTML = '';
    if(testContainer) testContainer.style.display = 'none';
    if(subjectSelect) subjectSelect.value = '';
    if(topicSelect) topicSelect.innerHTML = '<option value="">Vyberte okruh</option>';
    if(topicSelect) topicSelect.disabled = true;
    if(generateTestBtn) generateTestBtn.disabled = true;

     // Calendar will be regenerated by auth listener with empty data
}


// --- CSV Parsing & Data Initialization ---

/**
 * Parses a single CSV string into the global 'data' object.
 * @param {string} csvText - The raw CSV data string.
 * @param {string} subject - The subject name (e.g., "Programování").
 * @param {string} topic - The topic name.
 */
function parseCSV(csvText, subject, topic) {
    if (!csvText || !subject || !topic) {
        console.error("parseCSV: Missing input data", { subject, topic });
        return;
    }
    // Trim whitespace and filter out empty lines
    const lines = csvText.trim().split('\n').filter(line => line.trim() !== '');
    if (lines.length < 2) { // Need header + at least one data line
        console.warn(`parseCSV: Not enough lines in CSV for ${subject} - ${topic}`);
        return;
    }

    // Header isn't strictly used here but good practice to acknowledge it
    // const header = lines[0].split(';').map(h => h.trim());
    const questions = [];

    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(';').map(val => val.trim().replace(/^"(.*)"$/, '$1')); // Trim values and remove surrounding quotes

        if (values.length >= 3 && values[0] && values[1]) { // Need at least Question, Correct Answer, Option 1
            const questionText = values[0];
            const correctAnswer = values[1];
            const options = values.slice(2).filter(opt => opt); // Get options (from index 2 onwards), filter out empty ones

             // Ensure we have at least a few options + the correct one makes sense
             if (options.length < 1) {
                console.warn(`parseCSV: Question "${questionText}" has no options. Skipping.`);
                continue;
             }


            const question = {
                text: questionText,
                correctAnswer: correctAnswer,
                options: options, // Incorrect options
                // correctIndex will be determined after shuffling in generateTest
            };
            questions.push(question);
        } else {
             console.warn(`parseCSV: Skipping invalid line ${i+1} in ${subject} - ${topic}:`, lines[i]);
        }
    }

    // Add the parsed questions to the main data structure
    if (!data[subject]) {
        console.warn(`parseCSV: Subject "${subject}" not found in data structure. Creating.`);
        data[subject] = {};
    }
     if (!data[subject][topic]) {
        data[subject][topic] = []; // Initialize if topic doesn't exist (shouldn't happen with predefined structure)
    }
    data[subject][topic] = questions;
    console.log(`Parsed ${questions.length} questions for ${subject} - ${topic}`);
}

/**
 * Generates and displays a test based on selected subject and topic.
 */
function generateTest() {
    if (!testContainer || !noQuestionsMessage || !subjectSelect || !topicSelect) return;

    const subject = subjectSelect.value;
    const topic = topicSelect.value;

    testContainer.innerHTML = ''; // Clear previous test
    testContainer.style.display = 'none'; // Hide initially
    noQuestionsMessage.style.display = 'none';

    if (!subject || !topic) {
        noQuestionsMessage.textContent = "Prosím vyberte předmět a okruh.";
        noQuestionsMessage.style.display = 'block';
        return;
    }

    let testQuestions = [];
    const questionsPerTopicSummary = 2; // How many questions per topic for summary test
    const questionsPerStandardTest = 10;

    try {
        if (subject === "Čeština") {
            // --- Generate Čeština Test ---
            const bookData = data[subject]?.[topic]; // Get the book's JSON object
            if (!bookData || !bookData.questions || bookData.questions.length === 0) {
                throw new Error(`Pro knihu "${topic}" nebyla nalezena data nebo otázky.`);
            }

            console.log(`Generating Čeština test for ${topic}`);
            testContainer.innerHTML = ''; // Clear just before adding questions

            // Get the correct 'druh' for conditional questions
            const correctDruh = bookData.questions.find(q => q.id === 'druh')?.correctAnswer;

            bookData.questions.forEach((q, index) => {
                const questionDiv = document.createElement('div');
                questionDiv.classList.add('question', `question-type-${q.type}`);
                // Store type and correct answer(s) for evaluation
                questionDiv.dataset.questionId = q.id;
                questionDiv.dataset.questionType = q.type;
                if (q.correctAnswer) {
                     // Store correct answer, lowercased for free text
                    questionDiv.dataset.correct = (q.type === 'free_text') ? q.correctAnswer.toLowerCase() : q.correctAnswer;
                }
                if (q.correctAnswers) {
                    // Store array of multiple correct answers (stringified)
                    questionDiv.dataset.correct = JSON.stringify(q.correctAnswers.sort()); // Sort for consistent comparison
                }
                 // Handle conditional 'vypravec' separately for correct answer storage
                 if (q.type === 'conditional_mc_single' && q.correctBasedOn && correctDruh) {
                    questionDiv.dataset.correct = q.correctBasedOn[correctDruh] || "CHYBA_V_DATECH";
                 }


                const questionTextDiv = document.createElement('div');
                questionTextDiv.classList.add('question-text');
                questionTextDiv.textContent = `${index + 1}. ${q.questionText}`;
                questionDiv.appendChild(questionTextDiv);

                const optionsDiv = document.createElement('div');
                optionsDiv.classList.add('question-options');

                // --- Generate Input Based on Type ---
                switch (q.type) {
                    case 'mc_single':
                    case 'conditional_mc_single': // Treat conditional like single MC for generation
                        let optionsToShow = q.options;
                         // Determine options for conditional vypravec based on the CORRECT druh
                         if (q.type === 'conditional_mc_single') {
                             if (q.optionsBasedOn && correctDruh) {
                                 optionsToShow = q.optionsBasedOn[correctDruh] || [];
                             } else {
                                 optionsToShow = []; // Or show an error/placeholder
                                 console.error(`Missing options for conditional question ${q.id} based on druh ${correctDruh}`);
                             }
                         }
                        if (!optionsToShow || optionsToShow.length === 0) {
                            optionsDiv.textContent = "Chyba: Možnosti nebyly nalezeny.";
                        } else {
                             // Shuffle options unless it's conditional with only one possibility
                            const shuffledOptions = (q.type === 'conditional_mc_single' && optionsToShow.length <= 1)
                                                    ? optionsToShow
                                                    : shuffleArray([...optionsToShow]);

                            shuffledOptions.forEach(optionText => {
                                const label = document.createElement('label');
                                label.classList.add('option-label');
                                const input = document.createElement('input');
                                input.type = 'radio';
                                input.name = `question_${q.id}`; // Unique name per question
                                input.value = optionText;
                                label.appendChild(input);
                                label.appendChild(document.createTextNode(` ${optionText}`)); // Add space
                                optionsDiv.appendChild(label);
                            });
                        }
                        break;

                    case 'free_text':
                        const input = document.createElement('input');
                        input.type = 'text';
                        input.name = `question_${q.id}`;
                        input.placeholder = 'Napište odpověď...';
                        input.classList.add('free-text-input'); // Add class for styling
                        optionsDiv.appendChild(input);
                        break;

                    case 'mc_multiple':
                         if (!q.options || q.options.length === 0) {
                            optionsDiv.textContent = "Chyba: Možnosti nebyly nalezeny.";
                         } else {
                            const shuffledOptions = shuffleArray([...q.options]);
                            shuffledOptions.forEach(optionText => {
                                const label = document.createElement('label');
                                label.classList.add('option-label');
                                const input = document.createElement('input');
                                input.type = 'checkbox';
                                input.name = `question_${q.id}`; // Use same name for grouping? No, value matters.
                                input.value = optionText;
                                label.appendChild(input);
                                label.appendChild(document.createTextNode(` ${optionText}`));
                                optionsDiv.appendChild(label);
                            });
                         }
                        break;

                    default:
                        optionsDiv.textContent = `Neznámý typ otázky: ${q.type}`;
                }

                questionDiv.appendChild(optionsDiv);
                testContainer.appendChild(questionDiv);
            });

        } else {
            // --- Generate Standard Multiple Choice Test (CSV based) ---
            let testQuestions = [];
            const questionsPerTopicSummary = 2;
            const questionsPerStandardTest = 10; // Keep standard number

            if (topic === "Souhrnné opakování") {
            console.log(`Generating summary test for ${subject}`);
            const otherTopics = Object.keys(data[subject] || {}).filter(t => t !== "Souhrnné opakování");

            if (otherTopics.length === 0) {
                throw new Error("Nebyly nalezeny žádné okruhy (CSV) pro souhrnný test.");
            }

            for (const otherTopic of otherTopics) {
                const questionsFromTopic = data[subject]?.[otherTopic];
                if (questionsFromTopic && Array.isArray(questionsFromTopic) && questionsFromTopic.length > 0) {
                    const randomQuestions = getRandomQuestions(questionsFromTopic, questionsPerTopicSummary);
                    testQuestions.push(...randomQuestions);
                } else {
                     console.warn(`No CSV questions found for ${subject} - ${otherTopic} in summary`);
                }
            }
            shuffleArray(testQuestions);

       } else {
           // Standard topic test (CSV)
           console.log(`Generating standard test for ${subject} - ${topic}`);
           const availableQuestions = data[subject]?.[topic];

           if (!availableQuestions || !Array.isArray(availableQuestions) || availableQuestions.length === 0) {
               throw new Error(`Pro okruh "${topic}" nebyly nalezeny žádné otázky (CSV).`);
           }
           testQuestions = getRandomQuestions(availableQuestions, questionsPerStandardTest);
       }

        if (testQuestions.length === 0) {
             throw new Error("Nepodařilo se vygenerovat žádné otázky pro tento test.");
        }

       console.log(`Generated ${testQuestions.length} standard questions.`);

       // --- Display Standard Questions ---
       testQuestions.forEach((q, index) => {
           const questionDiv = document.createElement('div');
           questionDiv.classList.add('question', 'question-type-standard-mc'); // Add standard type class
           questionDiv.dataset.questionType = 'standard-mc';

           const questionText = document.createElement('div');
           questionText.classList.add('question-text');
           questionText.textContent = `${index + 1}. ${q.text}`;
           questionDiv.appendChild(questionText);

           const allOptions = [...q.options, q.correctAnswer];
           shuffleArray(allOptions);

           const optionsDiv = document.createElement('div');
           optionsDiv.classList.add('question-options');

           allOptions.forEach((optionText) => {
               const optionDiv = document.createElement('div');
               optionDiv.classList.add('option');
               optionDiv.textContent = optionText;
               optionDiv.dataset.correct = (optionText === q.correctAnswer); // Set data attribute

               optionDiv.addEventListener('click', () => {
                   questionDiv.querySelectorAll('.option.selected').forEach(sel => {
                       if(sel !== optionDiv) sel.classList.remove('selected');
                   });
                   optionDiv.classList.toggle('selected');
               });

               optionsDiv.appendChild(optionDiv);
           });

           questionDiv.appendChild(optionsDiv);
           testContainer.appendChild(questionDiv);
       });
   } // End of else (standard test)

   // --- Add Submit Button (Common for both test types) ---
   if (submitBtn && submitBtn.parentNode) {
       submitBtn.remove();
   }
   submitBtn = document.createElement('button');
   submitBtn.classList.add('btn', 'btn-primary', 'submit-test-btn'); // Add class
   submitBtn.style.marginTop = '2rem';
   submitBtn.textContent = 'Odeslat odpovědi';
   submitBtn.addEventListener('click', () => evaluateTest(db));
   testContainer.appendChild(submitBtn);

   testContainer.style.display = 'block'; // Show the generated test

} catch (error) {
   console.error("Error generating test:", error);
   noQuestionsMessage.textContent = error.message || "Nepodařilo se vygenerovat test.";
   noQuestionsMessage.style.display = 'block';
   testContainer.style.display = 'none';
}
}

/**
 * es the completed test, updates user stats/achievements, saves data, shows results.
 * @param {firebase.firestore.Firestore} db - The Firestore instance.
 */
async function evaluateTest(db) {
    let correct = 0;
    const questionElements = document.querySelectorAll('#test-container .question'); // Target questions inside container
    const total = questionElements.length;
    let allCorrect = total > 0;

    console.log(`Evaluating test with ${total} questions.`);

    if (total === 0) {
        console.warn("evaluateTest called with no questions rendered.");
        return; 
    }
    const submitButton = document.querySelector('.submit-test-btn');
    if (submitButton) submitButton.disabled = true;
    

    // --- Evaluate Answers and Update Option Styles ---
    questionElements.forEach((questionElement, qIndex) => {
        const questionType = questionElement.dataset.questionType;
        const correctAnswer = questionElement.dataset.correct; // String or stringified array
        let isQuestionCorrect = false;

        // Disable inputs/options
        questionElement.querySelectorAll('input, .option').forEach(el => {
            if (el.tagName === 'INPUT') el.disabled = true;
            else el.style.pointerEvents = 'none'; // For clickable divs
        });

        switch (questionType) {
            case 'mc_single':
            case 'conditional_mc_single': // Evaluate like single MC
                const selectedRadio = questionElement.querySelector('input[type="radio"]:checked');
                const labels = questionElement.querySelectorAll('.option-label');
                labels.forEach(label => {
                    const radio = label.querySelector('input');
                    // Highlight correct answer label
                    if (radio.value === correctAnswer) {
                        label.classList.add('correct');
                    }
                    // If this was the selected one, check correctness
                    if (radio.checked) {
                        if (radio.value === correctAnswer) {
                            isQuestionCorrect = true;
                            // Correct class already added
                        } else {
                            label.classList.add('incorrect'); // Mark selected incorrect label
                        }
                    }
                });
                if (!selectedRadio) allCorrect = false; // Nothing selected
                 else if (!isQuestionCorrect) allCorrect = false; // Incorrect selected
                break;

            case 'free_text':
                const input = questionElement.querySelector('.free-text-input');
                const userAnswer = input.value.trim().toLowerCase();
                const correctAnswerLower = correctAnswer.toLowerCase(); // Already lowercased in dataset? double check.

                if (userAnswer === correctAnswerLower) {
                    isQuestionCorrect = true;
                    input.classList.add('correct');
                } else {
                    input.classList.add('incorrect');
                    allCorrect = false;
                    // Optionally show the correct answer
                    const correctAnswerDisplay = document.createElement('span');
                    correctAnswerDisplay.classList.add('correct-answer-display');
                     // Get original case from data if needed, or just use the lowercased one
                    correctAnswerDisplay.textContent = ` (Správně: ${correctAnswer})`;
                    input.parentNode.appendChild(correctAnswerDisplay);
                }
                 if (!input.value.trim()) allCorrect = false; // Blank answer
                break;

            case 'mc_multiple':
                const selectedCheckboxes = questionElement.querySelectorAll('input[type="checkbox"]:checked');
                const correctAnswersArray = JSON.parse(correctAnswer).sort(); // Parse and sort
                const selectedValues = Array.from(selectedCheckboxes).map(cb => cb.value).sort(); // Get values and sort

                // Exact match required (same items, same count)
                 isQuestionCorrect = selectedValues.length === correctAnswersArray.length &&
                                  selectedValues.every((value, index) => value === correctAnswersArray[index]);

                // Highlight labels
                questionElement.querySelectorAll('.option-label').forEach(label => {
                    const checkbox = label.querySelector('input');
                    const isActuallyCorrect = correctAnswersArray.includes(checkbox.value);

                    if (isActuallyCorrect) {
                         label.classList.add('correct'); // Highlight all correct options
                    }

                    if (checkbox.checked) {
                        if (!isActuallyCorrect) {
                            label.classList.add('incorrect'); // Selected but shouldn't have been
                        }
                    } else {
                        if (isActuallyCorrect) {
                             // label.classList.add('missed'); // Optional: Style for missed correct answers
                        }
                    }
                });

                if (!isQuestionCorrect) {
                    allCorrect = false;
                }
                break;

             case 'standard-mc': // Handle the original CSV multiple choice
                 const selectedOptionDiv = questionElement.querySelector('.option.selected');
                 questionElement.querySelectorAll('.option').forEach(option => {
                     option.style.pointerEvents = 'none';
                     const isCorrect = option.dataset.correct === 'true';
                     if (isCorrect) {
                         option.classList.add('correct');
                     }
                     if (option.classList.contains('selected')) {
                         if (isCorrect) {
                             isQuestionCorrect = true;
                         } else {
                             option.classList.add('incorrect');
                         }
                     }
                 });
                  if (!selectedOptionDiv) allCorrect = false; // Nothing selected
                  else if (!isQuestionCorrect) allCorrect = false; // Incorrect selected
                 break;


            default:
                console.warn(`Unknown question type for evaluation: ${questionType}`);
                allCorrect = false; // Mark as incorrect if type is unknown
        }

        if (isQuestionCorrect) {
            correct++;
        }
        console.log(`Question ${qIndex+1} (${questionType}): ${isQuestionCorrect ? 'Correct' : 'Incorrect'}`);

    }); // End forEach questionElement

    // --- Show Results Modal & Update User Data ---
    // This part remains largely the same, it uses the final 'correct' and 'total' counts.
    console.log(`Test Result: ${correct}/${total}`);

    // Show Results Modal
    if (resultCorrect) resultCorrect.textContent = correct;
    if (resultTotal) resultTotal.textContent = total;
    const finalSuccessRate = total > 0 ? Math.round((correct / total) * 100) : 0;
    if (resultPercentage) resultPercentage.textContent = `${finalSuccessRate}%`;
    if (modal) modal.classList.add('show');

    // Update User Data (only if logged in)
    if (!currentUser) {
        console.warn("User not logged in. Test results not saved.");
        addBackButtonToTestContainer();
        return;
    }

    console.log("Updating user data in Firestore...");
    const userData = await getUserData(currentUser, db);
    if (!userData) {
        console.error("Could not retrieve user data to save results.");
        alert("Chyba: Nepodařilo se načíst uživatelská data pro uložení výsledků.");
        addBackButtonToTestContainer();
        return;
    }

     // Ensure structures exist
     userData.progress = userData.progress || {};
     userData.achievements = userData.achievements || { /* Initialize */ };
     userData.activity = userData.activity || {};
     userData.completedTopics = new Set(userData.completedTopics || []); // Use Set

    // --- Update Core Stats ---
    userData.testsToday = (userData.testsToday || 0) + 1;
    userData.correctAnswersToday = (userData.correctAnswersToday || 0) + correct;
    userData.totalTestsCompleted = (userData.totalTestsCompleted || 0) + 1;
    userData.totalXP = (userData.totalXP || 0) + correct; // XP based on correct answers

    // --- Update Subject Progress ---
    const subject = subjectSelect.value;
    if (subject && (data[subject] || dataFileConfig[subject])) { // Check config too
        userData.progress[subject] = userData.progress[subject] || {
            testsCompleted: 0, correctAnswers: 0, totalQuestionsAnswered: 0, successRate: 0
        };
        const subjData = userData.progress[subject];
        subjData.testsCompleted++;
        subjData.correctAnswers += correct;
        subjData.totalQuestionsAnswered = (subjData.totalQuestionsAnswered || 0) + total; // total questions in this specific test
        subjData.successRate = subjData.totalQuestionsAnswered > 0
            ? Math.round((subjData.correctAnswers / subjData.totalQuestionsAnswered) * 100)
            : 0;
    }

    // --- Update Average Success Rate (Recalculate) ---
    // (Logic remains the same as before)
     let totalSuccessSum = 0;
     let numSubjectsWithProgress = 0;
     for (const subjKey in userData.progress) {
         if (userData.progress[subjKey]?.testsCompleted > 0) {
             totalSuccessSum += (userData.progress[subjKey].successRate || 0);
             numSubjectsWithProgress++;
         }
     }
     userData.averageSuccessRate = numSubjectsWithProgress > 0
         ? Math.round(totalSuccessSum / numSubjectsWithProgress)
         : 0;


    // --- Update Streaks & Activity Log ---
    // (Logic remains the same as before)
    const today = new Date();
    const todayDateString = today.toDateString();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDate();

    if (finalSuccessRate >= 80) {
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        const yesterdayString = yesterday.toDateString();
        if (userData.lastCompletedTestDate !== todayDateString) {
             if (userData.lastCompletedTestDate === yesterdayString) {
                userData.dayStreak = (userData.dayStreak || 0) + 1;
             } else {
                userData.dayStreak = 1;
             }
             userData.lastCompletedTestDate = todayDateString;
        }
    } else {
         if (userData.lastCompletedTestDate !== todayDateString) {
            userData.dayStreak = 0;
         }
    }

    userData.activity[todayYear] = userData.activity[todayYear] || {};
    userData.activity[todayYear][todayMonth] = userData.activity[todayYear][todayMonth] || {};
    userData.activity[todayYear][todayMonth][todayDay] = (userData.activity[todayYear][todayMonth][todayDay] || 0) + 1;
    userData.lastActivityDate = todayDateString; // Update last activity date


    // --- Update Achievements ---
    if (allCorrect) {
        userData.flawlessTestCount = (userData.flawlessTestCount || 0) + 1;
        userData.winningStreakCount = (userData.winningStreakCount || 0) + 1;
    } else {
        userData.winningStreakCount = 0;
    }

    const topic = topicSelect.value;
    // Add topic if it's not summary and exists in config
    if (topic && subject && dataFileConfig[subject]?.[topic]) {
        userData.completedTopics.add(topic);
    }

    updateAchievements(userData); // Calculate achievement levels

    // --- Prepare for Saving & Save ---
    userData.completedTopics = Array.from(userData.completedTopics); // Convert Set back to Array
    await saveUserData(currentUser, userData, db);

    // --- Update UI ---
    console.log("Updating UI after test evaluation...");
    updateStatisticsSection(userData);
    updateDashboard(userData);
    updateProgressSection(userData);
    updateAchievementsUI(userData);
    await generateCalendar(currentYear, currentMonth, db); // Await calendar generation

    // --- Add Back Button ---
    addBackButtonToTestContainer(); // Reuse existing function

} 


/** Adds the 'Back to Test Selection' button if not already present */
function addBackButtonToTestContainer() {
    if (!testContainer) return;
     // Remove old submit button if it exists
     if (submitBtn && submitBtn.parentNode) {
        submitBtn.remove();
        submitBtn = null; // Clear reference
     }
    // Check if back button already exists
    let existingBackBtn = testContainer.querySelector('#dynamic-back-btn');
    if (!existingBackBtn) {
        const backBtn = document.createElement('button');
        backBtn.id = 'dynamic-back-btn'; // Give it an ID
        backBtn.type = 'button';
        backBtn.classList.add('btn', 'btn-primary');
        backBtn.style.marginTop = '2rem'; // Add space
        backBtn.textContent = 'Zpět na výběr testů';
        backBtn.addEventListener('click', handleBackToTestSelection);
        // Append after the last question or at the end
        testContainer.appendChild(backBtn);
    }
}

/** Logic for the 'Back to Test Selection' button */
function handleBackToTestSelection() {
     if(modal) modal.classList.remove('show'); // Hide modal if shown
     if(testContainer) {
         testContainer.innerHTML = ''; // Clear the test content
         testContainer.style.display = 'none';
     }
     if(subjectSelect) subjectSelect.value = "";
     if(topicSelect) {
         topicSelect.innerHTML = '<option value="">Vyberte okruh</option>';
         topicSelect.disabled = true;
     }
     if(generateTestBtn) {
         generateTestBtn.disabled = true; // Disable until subject/topic selected
         generateTestBtn.style.display = 'inline-block'; // Ensure visible
     }
     showTestSection(); // Show the test selection interface
}


// --- Achievement Calculation ---

/**
 * Calculates the achievement level based on a value and predefined levels.
 * @param {number[]} levels - An array of thresholds for each level.
 * @param {number} value - The current value to check against the levels.
 * @returns {number} The achieved level (0 if none).
 */
function calculateLevel(levels, value) {
    let level = 0;
    if (value === undefined || value === null || !Array.isArray(levels)) return 0; // Basic validation
    for (let i = 0; i < levels.length; i++) {
        if (value >= levels[i]) {
            level = i + 1;
        } else {
            break; // Stop checking once a threshold isn't met
        }
    }
    return level;
}

/**
 * Updates all achievement levels within the userData object.
 * @param {object} userData - The user data object (will be mutated).
 */
function updateAchievements(userData) {
    if (!userData || !userData.achievements) return; // Safety check

    const achievements = userData.achievements; // Shortcut

    // XP Collector
    achievements.xpCollector = calculateLevel(
        achievementLevels.xpCollector.levels,
        userData.totalXP || 0
    );
    // Unstoppable (Day Streak)
    achievements.unstoppable = calculateLevel(
        achievementLevels.unstoppable.levels,
        userData.dayStreak || 0
    );
    // Flawless (Perfect Tests)
    achievements.flawless = calculateLevel(
        achievementLevels.flawless.levels,
        userData.flawlessTestCount || 0
    );
    // Winning Streak (Consecutive Perfect Tests)
    achievements.winningStreak = calculateLevel(
        achievementLevels.winningStreak.levels,
        userData.winningStreakCount || 0
    );
    // Topic Master (Unique Topics Completed)
    // Use the size of the Set *before* it was converted back to Array
    const completedTopicsSet = new Set(userData.completedTopics || []);
    achievements.topicMaster = calculateLevel(
        achievementLevels.topicMaster.levels,
        completedTopicsSet.size
    );

    // --- Time-Based Achievements ---
    const now = new Date();
    const hour = now.getHours();

    // Early Bird (Tests between 5 AM and 8 AM)
    if (hour >= 5 && hour < 8) {
        // Note: This increments count every time evaluateTest runs in this window.
        // If you only want to count *days* with early tests, logic needs adjustment.
        achievements.earlyBirdCount = (achievements.earlyBirdCount || 0) + 1;
    }
    achievements.earlyBird = calculateLevel(
        achievementLevels.earlyBird.levels,
        achievements.earlyBirdCount || 0
    );

    // Night Owl (Tests between 9 PM and 1 AM)
    if (hour >= 21 || hour < 1) {
        achievements.nightOwlCount = (achievements.nightOwlCount || 0) + 1;
    }
    achievements.nightOwl = calculateLevel(
        achievementLevels.nightOwl.levels,
        achievements.nightOwlCount || 0
    );

    // Marathoner (Tests completed today)
    achievements.marathoner = calculateLevel(
        achievementLevels.marathoner.levels,
        userData.testsToday || 0 // Assuming testsToday is reset daily (needs separate logic)
    );
}


// --- Calendar Functions ---

/**
 * Fetches activity data for the calendar.
 * @param {number} year
 * @param {number} month (0-11)
 * @param {firebase.firestore.Firestore} db
 * @returns {Promise<object>} Object with day numbers as keys and counts as values.
 */
async function getActivityData(year, month, db) {
    if (!currentUser || !db) return {}; // Return empty if no user/db
    try {
        const userData = await getUserData(currentUser, db); // Use the improved getter
        if (userData?.activity?.[year]?.[month]) {
            return userData.activity[year][month];
        }
        return {}; // Return empty if no data for this period
    } catch (error) {
        console.error("Error fetching activity data:", error);
        return {}; // Return empty on error
    }
}

/**
 * Maps activity count to CSS class name.
 * @param {number} count - Number of tests completed on a day.
 * @returns {string} CSS class name.
 */
function getActivityClass(count) {
    if (count === 0) return 'activity-none';
    if (count >= 1 && count <= 2) return 'activity-low';
    if (count >= 3 && count <= 4) return 'activity-medium';
    if (count >= 5 && count <= 6) return 'activity-high';
    return 'activity-very-high'; // 7+
}

/**
 * Generates and displays the calendar for the given month and year.
 * @param {number} year
 * @param {number} month (0-11)
 * @param {firebase.firestore.Firestore} db
 */
async function generateCalendar(year, month, db) {
    if (!calendarGrid || !currentMonthDisplay) return;
    calendarGrid.innerHTML = ''; // Clear previous grid

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    // Adjust startingDay: 0=Sunday -> 6, 1=Monday -> 0, etc. to make Monday first day
    const startingDay = (firstDayOfMonth.getDay() + 6) % 7;

    // Fetch activity data for the month asynchronously
    const activityData = await getActivityData(year, month, db);

    // Display month and year
    currentMonthDisplay.textContent = firstDayOfMonth.toLocaleString('cs-CZ', { month: 'long', year: 'numeric' });

    // Add day headers (optional but good UX)
    const dayNames = ['Po', 'Út', 'St', 'Čt', 'Pá', 'So', 'Ne'];
    dayNames.forEach(name => {
        const dayHeader = document.createElement('div');
        dayHeader.classList.add('day-header'); // Add a class for styling
        dayHeader.textContent = name;
        dayHeader.style.textAlign = 'center'; // Basic styling
        dayHeader.style.fontWeight = 'bold';
        dayHeader.style.fontSize = '0.8em';
        calendarGrid.appendChild(dayHeader);
    });


    // Create blank cells for days before the 1st
    for (let i = 0; i < startingDay; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day', 'inactive');
        calendarGrid.appendChild(dayDiv);
    }

    // Create cells for each day of the month
    const today = new Date(); // Get today's date for highlighting
    const todayDate = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();

    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');
        dayDiv.textContent = day;

        // Apply activity class
        const dayCount = activityData[day] || 0;
        const activityClass = getActivityClass(dayCount);
        if (activityClass) {
            dayDiv.classList.add(activityClass);
        }

        // Highlight today's date
        if (year === todayYear && month === todayMonth && day === todayDate) {
            dayDiv.classList.add('active');
        }

        // Add tooltip or click event (optional)
        dayDiv.title = `${day}.${month + 1}.${year}: ${dayCount} testů`; // Simple tooltip
        dayDiv.addEventListener('click', () => {
            console.log(`Kliknuto na den: ${day}.${month + 1}.${year} (${dayCount} testů)`);
            // Could show more details here in the future
        });

        calendarGrid.appendChild(dayDiv);
    }
}


// --- Utility Functions ---

/** Shuffles array in place using Fisher-Yates. */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/** Selects N random elements from an array without replacement. */
function getRandomQuestions(arr, n) {
    if (!arr || arr.length === 0) return [];
    const shuffled = shuffleArray(arr.slice()); // Create a shuffled copy
    return shuffled.slice(0, Math.min(n, arr.length)); // Return the first N elements
}

/** Initializes the subject dropdown menu. */
function initializeSubjects() {
    if (!subjectSelect) return;
    subjectSelect.innerHTML = '<option value="">Vyberte předmět</option>'; // Placeholder
    for (const subject in data) {
        const option = document.createElement('option');
        option.value = subject;
        option.textContent = subject;
        subjectSelect.appendChild(option);
    }
}

/** Populates the topic dropdown based on the selected subject. */
function populateTopics(subject) {
    if (!topicSelect || !generateTestBtn) return;

    topicSelect.innerHTML = '<option value="">Vyberte okruh</option>'; // Reset
    topicSelect.disabled = true;
    generateTestBtn.disabled = true;

    if (subject && data[subject]) {
        for (const topic in data[subject]) {
            const option = document.createElement('option');
            option.value = topic;
            option.textContent = topic;
            topicSelect.appendChild(option);
        }
        topicSelect.disabled = false;
        // Enable generate button only if a topic is actually selected later
    }
}

// --- Event Listener Setup ---
function setupEventListeners() {
    // Navigation Links
    document.getElementById('dashboard-link')?.addEventListener('click', (e) => {
        e.preventDefault();
        showDashboard();
        // Data is updated automatically if needed when loading user data
    });
    document.getElementById('test-link')?.addEventListener('click', (e) => {
         e.preventDefault();
         showTestSection();
    });
    document.getElementById('progress-link')?.addEventListener('click', (e) => {
        e.preventDefault();
        showProgressSection();
        // Data should be up-to-date from previous actions or load
        if (currentUser) {
             getUserData(currentUser, db).then(userData => updateProgressSection(userData));
        }
    });
    themeToggleButton?.addEventListener('click', toggleTheme);

    // Auth Link (Login/Logout)
    authLink?.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentUser) {
            logoutUserHandler(auth); // Use handler
        } else {
            showLogin();
        }
    });

    // Login/Register Buttons
    loginBtn?.addEventListener('click', () => loginUserHandler(auth)); // Use handler
    registerBtn?.addEventListener('click', () => registerUserHandler(auth)); // Use handler

    // Test Generation Controls
    subjectSelect?.addEventListener('change', function () {
        populateTopics(this.value);
        topicSelect.value = ""; // Reset topic selection
        generateTestBtn.disabled = true; // Disable btn until topic is chosen
    });
    topicSelect?.addEventListener('change', function () {
        generateTestBtn.disabled = !this.value; // Enable only if a topic is selected
    });
    generateTestBtn?.addEventListener('click', generateTest);

    // Modal Controls
    closeModalBtn?.addEventListener('click', () => {
        if(modal) modal.classList.remove('show');
    });
    backToTestsModalBtn?.addEventListener('click', () => { // Use correct button ID
         handleBackToTestSelection();
    });
    window.addEventListener('click', (event) => { // Close modal on outside click
        if (event.target === modal) {
            if(modal) modal.classList.remove('show');
        }
    });

    // Calendar Navigation
    prevMonthBtn?.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        generateCalendar(currentYear, currentMonth, db); // Regenerate with db
    });
    nextMonthBtn?.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        generateCalendar(currentYear, currentMonth, db); // Regenerate with db
    });

     // Add listeners for subject card clicks (handled within updateDashboard)

}
    
