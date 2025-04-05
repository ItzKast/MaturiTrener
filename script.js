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
        "William Shakespeare - Romeo a Julie": "cestina_william_shakespeare_romeo_a_julie.json",
        "William Shakespeare - Hamlet": "cestina_william_shakespeare_hamlet.json",
        "Molière - Lakomec": "cestina_moliere_lakomec.json",
        "Alexandr Sergejevič Puškin - Evžen Oněgin": "cestina_Puskin_Evžen_Oněgin.json",
        "Honoré de Balzac - Otec Goriot": "cestina_balzak_otec_goriot.json",
        "Nikolaj Vasiljevič Gogol - Revizor": "cestina_Gogol_Revizor.json",
        "Edgar Allan Poe - Jáma a kyvadlo": "cestina_Poe_Jáma_a_kyvadlo.json",
        "Oscar Wilde - Obraz Doriana Graye": "cestina_Wilde_Obraz_Doriana_Graye.json",
        "Gustave Flaubert - Paní Bovaryová": "cestina_Flaubert_Paní_Bovaryová.json",
        "Guy de Maupassant - Kulička": "cestina_Maupassant_Kulička.json",
        "Émile Zola - Zabiják": "cestina_Zola_Zabiják.json",
        "Karel Hynek Mácha - Máj": "cestina_Mácha_Máj.json",
        "Karel Jaromír Erben - Kytice": "cestina_Erben_Kytice.json",
        "Alois a Vilém Mrštíkové - Maryša": "cestina_Mrštíkové_Maryša.json",
        "Romain Rolland - Petr a Lucie": "cestina_Rolland_Petr_a_Lucie.json",
        "Erich Maria Remarque - Na západní frontě klid": "cestina_Remarque_Na_západní_frontě_klid.json",
        "Erich Maria Remarque - Tři kamarádi": "cestina_Remarque_Tři_kamarádi.json",
        "Antoine de Saint-Exupéry - Malý princ": "cestina_Saint-Exupéry_Malý_princ.json",
        "Ernest Hemingway - Stařec a moře": "cestina_Hemingway_Stařec_a_moře.json",
        "Jack Kerouac - Na cestě": "cestina_Kerouac_Na_cestě.json",
        "John Steinbeck - O myších a lidech": "cestina_Steinbeck_O_myších_a_lidech.json",
        "George Orwell - Farma zvířat": "cestina_Orwell_Farma_zvířat.json",
        "Ken Kesey - Vyhoďme ho z kola ven": "cestina_Kesey_Vyhoďme_ho_z_kola_ven.json",
        "J.R.R. Tolkien - Hobit": "cestina_Tolkien_Hobit.json",
        "Francis Scott Fitzgerald - Velký Gatsby": "cestina_Fitzgerald_Velký_Gatsby.json",
        "Franz Kafka - Proměna": "cestina_Kafka_Proměna.json",
        "Jiří Wolker - Těžká hodina": "cestina_Wolker_Těžká_hodina.json",
        "Viktor Dyk - Krysař": "cestina_Dyk_Krysař.json",
        "Ota Pavel - Plná bedna šampaňského": "cestina_Pavel_Plná_bedna_šampaňského.json",
        "Jan Otčenášek - Romeo, Julie a tma": "cestina_Otčenášek_Romeo_Julie_a_tma.json",
        "Arnošt Lustig - Modlitba pro Kateřinu Horovitzovou": "cestina_Lustig_Modlitba_pro_Kateřinu_Horovitzovou.json",
        "Karel Čapek - Bílá nemoc": "cestina_Čapek_Bílá_nemoc.json",
        "Karel Čapek - R.U.R.": "cestina_karel_capek_rur.json",
        "Karel Čapek - Válka s mloky": "cestina_Čapek_Válka_s_mloky.json",
        "Karel Kryl - Kníška": "cestina_Kryl_Kníška.json",
        "Josef Škvorecký - Zbabělci": "cestina_Škvorecký_Zbabělci.json",
        "Ladislav Fuks - Spalovač mrtvol": "cestina_Fuks_Spalovač_mrtvol.json",
        "Bohumil Hrabal - Ostře sledované vlaky": "cestina_Hrabal_Ostře_sledované_vlaky.json"
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
let leaderboardListenerUnsubscribe = null;


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
    testsTodayEl, correctAnswersEl, successRateEl, dayStreakEl, totalXpEl, achievementListEl, themeToggleButton, toggleFavoriteBtn; // Added elements for stats
let profileSection, profileEmail, profileNickname, profileJoined,
    nicknameChangeForm, newNicknameInput, changeNicknameBtn, nicknameChangeMessage,
    changePasswordBtn, passwordChangeMessage, deleteAccountBtn, deleteAccountMessage, profileLinkleaderboardList, noLeaderboardLi, nicknameInput;


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
    toggleFavoriteBtn = document.getElementById('toggle-favorite-btn');
    // Stat elements
    testsTodayEl = document.getElementById('tests-today');
    correctAnswersEl = document.getElementById('correct-answers');
    successRateEl = document.getElementById('success-rate');
    dayStreakEl = document.getElementById('day-streak'); // Get element for stats section too
    totalXpEl = document.getElementById('total-xp'); // Get element for stats section too
    // Profile Section
    profileSection = document.getElementById('profile-section');
    profileLink = document.getElementById('profile-link');
    profileEmail = document.getElementById('profile-email');
    profileNickname = document.getElementById('profile-nickname');
    profileJoined = document.getElementById('profile-joined');
    nicknameChangeForm = document.getElementById('nickname-change-form');
    newNicknameInput = document.getElementById('new-nickname');
    changeNicknameBtn = document.getElementById('change-nickname-btn');
    nicknameChangeMessage = document.getElementById('nickname-change-message');
    changePasswordBtn = document.getElementById('change-password-btn');
    passwordChangeMessage = document.getElementById('password-change-message');
    deleteAccountBtn = document.getElementById('delete-account-btn');
    deleteAccountMessage = document.getElementById('delete-account-message');


    // Leaderboard
    leaderboardList = document.getElementById('leaderboard-list');
    noLeaderboardLi = leaderboardList?.querySelector('.no-leaderboard'); // Get initial placeholder

    // Registration Nickname
    nicknameInput = document.getElementById('nickname');

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
        // --- Firebase Auth Listener ---
auth.onAuthStateChanged(async (user) => {
    if (user) {
        // --- USER IS LOGGED IN ---
        const uid = user.uid;
        currentUser = uid; // Set global currentUser immediately
        console.log('Auth State Changed: Logged in as', user.email);
        authLink.textContent = "Odhlásit se"; // Update logout button text

        // Determine if this is potentially a brand new registration
        const creationTime = user.metadata.creationTime ? new Date(user.metadata.creationTime).getTime() : 0;
        const lastSignInTime = user.metadata.lastSignInTime ? new Date(user.metadata.lastSignInTime).getTime() : 0;
        // Check if creation and last sign-in are very close (e.g., within 5 seconds)
        // Use a slightly larger window just in case of clock skew or minor delays
        const isPotentiallyNewUser = creationTime && lastSignInTime && (Math.abs(lastSignInTime - creationTime) < 5000);

        console.log(`DEBUG: Auth state change for UID: ${uid}. Potentially New User: ${isPotentiallyNewUser}`);

        // Regardless of new or existing, show the main application view immediately
        showDashboard(); // Or whichever view is appropriate after login

        if (isPotentiallyNewUser) {
            // --- NEW USER REGISTRATION SCENARIO ---
            console.log("DEBUG: Handling as potential new user registration. Delaying full data load.");
            const registrationDataLoadDelay = 2000; // 2 seconds
            setTimeout(async () => {
                console.log(`DEBUG: Delayed data load starting for new user ${uid}.`);
                // Load data normally now, assuming transaction has likely committed.
                // Pass 'false' for isNewlyRegistered as we expect data to exist now.
                await loadUserDataFromFirestore(uid, db, false);
            }, registrationDataLoadDelay);

        } else {
            // --- EXISTING USER LOGIN SCENARIO ---
            console.log("DEBUG: Handling as existing user login. Loading data immediately.");
            // Load data immediately and normally for existing users.
            // Pass 'false' for isNewlyRegistered.
            await loadUserDataFromFirestore(uid, db, false);
        }

    } else {
        // --- USER IS LOGGED OUT ---
        currentUser = null;
        console.log('Auth State Changed: Logged out');
        authLink.textContent = "Přihlásit se";
        clearUserDataUI(); // Clear displayed stats and potentially profile/leaderboard
        showLogin();      // Show the login screen
        // Regenerate calendar with empty data (assuming generateCalendar handles null currentUser)
        generateCalendar(currentYear, currentMonth, db);
    }
});

    } catch (error) {
        console.error("Error initializing Firebase or setting up:", error);
        alert("Došlo k chybě při inicializaci aplikace. Zkontrolujte konzoli pro více detailů.");
        // Disable parts of the UI if needed
        if (loginSection) loginSection.innerHTML = '<h1>Chyba načítání aplikace</h1><p>Nelze se připojit k Firebase.</p>';
        if (dashboardSection) dashboardSection.style.display = 'none';
        if (testSection) testSection.style.display = 'none';
        if (progressSection) progressSection.style.display = 'none';
    }
}); // End DOMContentLoaded

// --- Firebase Data Functions ---

/**
 * Fetches user data from Firestore, initializing if it doesn't exist.
 * @param {string} uid - The user's ID.
 * @param {firebase.firestore.Firestore} db - The Firestore instance.
 * @returns {Promise<object|null>} A promise resolving to the user data object or null on error.
 */
async function getUserData(uid, db, isNewlyRegistered = false) { // Added isNewlyRegistered parameter
    if (!uid || !db) {
        console.warn("getUserData called without uid or db instance.");
        return null;
    }
    try {
        const docRef = db.collection("users").doc(uid);
        const doc = await docRef.get();

        if (doc.exists) {
            // --- Document Exists: Return Existing Data ---
            const data = doc.data();
            // Ensure essential structures exist after retrieval (Good practice)
            data.progress = data.progress || {};
            data.achievements = data.achievements || { /* default achievement levels */ };
            data.activity = data.activity || {};
            data.completedTopics = Array.isArray(data.completedTopics) ? data.completedTopics : []; // Ensure array
            data.favoriteBooks = Array.isArray(data.favoriteBooks) ? data.favoriteBooks : []; // Ensure array
            data.nickname = data.nickname || null; // Default to null if missing
            data.weeklyXP = typeof data.weeklyXP === 'number' ? data.weeklyXP : 0;
            // Add defaults for any other fields potentially missing from older docs
            data.testsToday = data.testsToday || 0;
            data.correctAnswersToday = data.correctAnswersToday || 0;
            data.totalTestsCompleted = data.totalTestsCompleted || 0;
            data.averageSuccessRate = data.averageSuccessRate || 0;
            data.dayStreak = data.dayStreak || 0;
            data.totalXP = data.totalXP || 0;
            data.flawlessTestCount = data.flawlessTestCount || 0;
            data.winningStreakCount = data.winningStreakCount || 0;
            data.lastActivityDate = data.lastActivityDate || null;
            data.lastCompletedTestDate = data.lastCompletedTestDate || null;


            console.log("Fetched user data:", data);
            return data;
        } else {
            // --- Document Does NOT Exist: Create Default Data ---
            console.log("No user document found for uid:", uid, ". Returning default structure.");

            // Create the default user data structure IN MEMORY
            // NOTE: The actual nickname/email should come from the registration transaction payload.
            // This default structure is mainly for initializing the app state if needed,
            // or if getUserData is somehow called before the transaction commits.
            const defaultUserData = {
                // Include ALL fields expected in a user document, matching the registration payload
                nickname: null, // Default nickname is null, registration transaction sets the real one
                email: null, // Default email is null, registration transaction sets the real one
                createdAt: firebase.firestore.FieldValue.serverTimestamp(), // Important for the rule later
                weeklyXP: 0,
                testsToday: 0,
                correctAnswersToday: 0,
                progress: {},
                totalTestsCompleted: 0,
                averageSuccessRate: 0,
                dayStreak: 0,
                totalXP: 0,
                lastCompletedTestDate: null,
                flawlessTestCount: 0,
                winningStreakCount: 0,
                favoriteBooks: [],
                completedTopics: [],
                achievements: {
                    xpCollector: 0, unstoppable: 0, flawless: 0, winningStreak: 0,
                    topicMaster: 0, earlyBird: 0, nightOwl: 0, marathoner: 0,
                    earlyBirdCount: 0, nightOwlCount: 0
                },
                activity: {},
                lastActivityDate: null
            };

            // --- Conditional Save ---
            if (!isNewlyRegistered) {
                // Save the default data ONLY if this isn't the immediate post-registration call
                console.log(`Saving default data for user ${uid} because isNewlyRegistered is false.`);
                // Use saveUserData to ensure correct format and merge behavior if needed elsewhere
                await saveUserData(uid, defaultUserData, db);
            } else {
                // If it IS the post-registration call, DON'T save.
                // The registration transaction is responsible for the initial write.
                console.log(`DEBUG: Skipping saveUserData for newly registered user ${uid} within getUserData.`);
            }

            // Always return the default structure so the calling function has something to work with
            return defaultUserData;
        }
    } catch (error) {
        console.error(`Error getting user document for ${uid}:`, error);
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
async function loadUserDataFromFirestore(uid, db, isNewlyRegistered = false) { // Add parameter here
     console.log("Attempting to load data for user:", uid, `Is New: ${isNewlyRegistered}`);
     if (!uid || !db) {
         console.error("loadUserDataFromFirestore: Missing UID or DB instance.");
         return;
     }

    try {
        let userData = await getUserData(uid, db, isNewlyRegistered); // Fetch data (this function now handles defaults if doc doesn't exist)

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
/**
 * Fetches the latest leaderboard data and updates the UI.
 */
async function refreshLeaderboard() {
    if (!currentUser || !leaderboardList) {
        console.log("Cannot refresh leaderboard: No user or list element.");
        return; // Exit if not logged in or element missing
    }
    console.log("Refreshing leaderboard data...");
    try {
        const leaderboardData = await fetchLeaderboardData(10); // Fetch top 10
        updateLeaderboardUI(leaderboardData); // Update the list
        console.log("Leaderboard UI updated.");
    } catch (error) {
        console.error("Error refreshing leaderboard:", error);
        // Optionally display an error in the leaderboard list
        if(leaderboardList) leaderboardList.innerHTML = '<li class="no-leaderboard">Chyba načítání žebříčku.</li>';
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
            case 'xpCollector': return userData?.totalXP || 0;
            case 'unstoppable': return userData?.dayStreak || 0;
            case 'flawless': return userData?.flawlessTestCount || 0;
            case 'winningStreak': return userData?.winningStreakCount || 0;
            case 'topicMaster': return (userData?.completedTopics instanceof Set ? userData.completedTopics.size : (userData?.completedTopics?.length || 0)); // Handle Set or Array
            case 'earlyBird': return achievementsData?.earlyBirdCount || 0;
            case 'nightOwl': return achievementsData?.nightOwlCount || 0;
            case 'marathoner': return userData?.testsToday || 0;
            default: return 0;
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
    // Add nicknameInput to the checks at the top
    if (!authInstance || !emailInput || !passwordInput || !loginMessage || !nicknameInput) return;

    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const nickname = nicknameInput.value.trim(); // Get nickname

    // --- Basic validation ---
    if (!email || !password || !nickname) { // Check nickname too
        loginMessage.textContent = "Prosím vyplňte email, heslo a přezdívku.";
        return;
    }
    if (password.length < 6) {
        loginMessage.textContent = "Heslo musí mít alespoň 6 znaků.";
        return;
    }
    // Nickname validation (adjust pattern/message as needed)
    const nicknamePattern = /^[a-zA-Z0-9_]{3,15}$/;
    if (!nicknamePattern.test(nickname)) {
         loginMessage.textContent = "Přezdívka může obsahovat 3-15 písmen, čísel a podtržítek.";
         return;
    }

    loginMessage.textContent = "Registruji a ověřuji přezdívku..."; // Feedback
    changeNicknameBtn.disabled = true; // Disable button
    registerBtn.disabled = true;


    try {
        // 1. Check Nickname Uniqueness
        const isUnique = await checkNicknameUniqueness(nickname);
        if (!isUnique) {
            loginMessage.textContent = "Tato přezdívka je již obsazena.";
             changeNicknameBtn.disabled = false;
             registerBtn.disabled = false;
            return;
        }

        // 2. Create User Account
        const userCredential = await authInstance.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        const uid = user.uid;

        // 3. Save Initial User Data and Nickname Reservation in a Transaction
        const userDocRef = db.collection("users").doc(uid);
        const nicknameDocRef = db.collection("nicknames").doc(nickname.toLowerCase());

        await db.runTransaction(async (transaction) => {
             // Set default user data including nickname and timestamp
             const userDataPayload = {
                    nickname: nickname, // The variable from input
                    email: email,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                    // ... include ALL OTHER necessary default fields ...
                    weeklyXP: 0,
                    testsToday: 0,
                    correctAnswersToday: 0,
                    progress: {},
                    totalTestsCompleted: 0,
                    averageSuccessRate: 0,
                    dayStreak: 0,
                    totalXP: 0,
                    lastCompletedTestDate: null,
                    flawlessTestCount: 0,
                    winningStreakCount: 0,
                    favoriteBooks: [],
                    completedTopics: [],
                    achievements: {
                        xpCollector: 0, unstoppable: 0, flawless: 0, winningStreak: 0,
                        topicMaster: 0, earlyBird: 0, nightOwl: 0, marathoner: 0,
                        earlyBirdCount: 0, nightOwlCount: 0
                     },
                    activity: {},
                    lastActivityDate: null
                };

                // --- NOW Log the payload ---
                console.log("DEBUG: Payload being set for userDocRef:", JSON.stringify(userDataPayload));
                console.log("DEBUG: Value of 'nickname' variable just before set:", nickname); // Log the variable directly too

                // --- Set the user document using the defined payload ---
                transaction.set(userDocRef, userDataPayload);

                // --- Set the nickname document ---
                transaction.set(nicknameDocRef, { userId: uid });
            });


        console.log("User registered and initial data saved successfully.");
        // onAuthStateChanged will handle the rest of the login flow
        loginMessage.textContent = "Registrace proběhla úspěšně. Přihlašuji...";
         // loginForm.reset(); // Optional: Clear form

    } catch (error) {
        console.error("Registration error:", error);
        loginMessage.textContent = "Chyba registrace: " + mapAuthError(error);
        // TODO: If error occurred *after* user creation but *before* data save,
        // need cleanup logic (delete user, delete nickname entry if created).
        // This is complex and often handled server-side. For now, log it.
        if (error.code !== 'auth/email-already-in-use' && error.message !== "Tato přezdívka je již obsazena.") {
            loginMessage.textContent += " Zkuste to prosím znovu.";
        }
    } finally {
         // Re-enable buttons unless successful
         if (loginMessage.textContent !== "Registrace proběhla úspěšně. Přihlašuji...") {
             changeNicknameBtn.disabled = false;
             registerBtn.disabled = false;
         }
    }
}
/**
 * Checks if a nickname is already taken in the 'nicknames' collection.
 * @param {string} nickname - The nickname to check.
 * @returns {Promise<boolean>} True if unique, false otherwise.
 */
async function checkNicknameUniqueness(nickname) {
    if (!nickname) return false;
    const nicknameLower = nickname.toLowerCase();
    const nicknameDocRef = db.collection("nicknames").doc(nicknameLower);
    try {
        const doc = await nicknameDocRef.get();
        return !doc.exists; // Return true if the document DOES NOT exist
    } catch (error) {
        console.error("Error checking nickname uniqueness:", error);
        // Fail safe: assume not unique on error to prevent duplicates
        return false;
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
    if (leaderboardListenerUnsubscribe) { // Detach when leaving Profile/Stats
        console.log("Detaching leaderboard listener when showing Login.");
        leaderboardListenerUnsubscribe();
        leaderboardListenerUnsubscribe = null;
    }
    if(loginSection) loginSection.style.display = 'flex';
    if(dashboardSection) dashboardSection.style.display = 'none';
    if(testSection) testSection.style.display = 'none';
    if(profileSection) profileSection.style.display = 'none';
    if(loginMessage) loginMessage.textContent = '';
    if(loginForm) {
        loginForm.reset();
        loginForm.classList.remove('register-mode');
    }
    if(loginBtn) loginBtn.style.display = 'block';
    if(registerBtn) registerBtn.textContent = 'Registrovat se';
}

function showDashboard() {

    if (leaderboardListenerUnsubscribe) { // Detach when leaving Statistiky
         console.log("Detaching leaderboard listener when showing Dashboard.");
         leaderboardListenerUnsubscribe();
         leaderboardListenerUnsubscribe = null;
     }
    if (loginSection) loginSection.style.display = 'none';
    if (dashboardSection) dashboardSection.style.display = 'block';
    if (testSection) testSection.style.display = 'none';
}

function showTestSection() {
    if (leaderboardListenerUnsubscribe) { // Detach when leaving Profile/Stats
        console.log("Detaching leaderboard listener when showing Test Section.");
        leaderboardListenerUnsubscribe();
        leaderboardListenerUnsubscribe = null;
    }
    if (loginSection) loginSection.style.display = 'none';
    if (dashboardSection) dashboardSection.style.display = 'none';
    if (testSection) testSection.style.display = 'block';
}

async function showProgressSection() { // Make async
    if(loginSection) loginSection.style.display = 'none';
    if(dashboardSection) dashboardSection.style.display = 'none';
    if(testSection) testSection.style.display = 'none';
    if(profileSection) profileSection.style.display = 'none'; // Hide profile
    if(progressSection) progressSection.style.display = 'block';

    if (currentUser) {
        try {
            // Fetch user-specific stats (like achievements, table data)
            const userData = await getUserData(currentUser, db);
            updateProgressSection(userData);
            updateAchievementsUI(userData);

            // --- Setup Real-time Leaderboard Listener ---
            if (leaderboardListenerUnsubscribe) {
                 console.log("Detaching previous leaderboard listener.");
                 leaderboardListenerUnsubscribe(); // Unsubscribe from previous listener if exists
                 leaderboardListenerUnsubscribe = null;
            }

            console.log("Attaching real-time leaderboard listener...");
            const query = db.collection("users")
                            .orderBy("totalXP", "desc")
                            .limit(10);

            leaderboardListenerUnsubscribe = query.onSnapshot(querySnapshot => {
                console.log("Leaderboard snapshot received.");
                const topUsers = [];
                querySnapshot.forEach(doc => {
                    const data = doc.data();
                    if (data.nickname && typeof data.totalXP === 'number') {
                        topUsers.push({
                            nickname: data.nickname,
                            xp: data.totalXP
                        });
                    }
                });
                updateLeaderboardUI(topUsers); // Update UI whenever data changes
            }, error => {
                console.error("Error fetching leaderboard snapshot:", error);
                if(leaderboardList) leaderboardList.innerHTML = '<li class="no-leaderboard">Chyba načítání žebříčku v reálném čase.</li>';
            });

        } catch (error) {
             console.error("Error loading progress section data:", error);
             if(leaderboardList) leaderboardList.innerHTML = '<li class="no-leaderboard">Chyba načítání žebříčku.</li>';
        }
    } else {
        // Clear UI if not logged in
         if (leaderboardListenerUnsubscribe) { // <<< Detach listener on logout too
             console.log("Detaching leaderboard listener on logout.");
             leaderboardListenerUnsubscribe();
             leaderboardListenerUnsubscribe = null;
         }
        updateProgressSection(null);
        updateAchievementsUI(null);
        updateLeaderboardUI([]); // Clear leaderboard UI
    }
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
    if (progressDayStreakEl) progressDayStreakEl.textContent = userData?.dayStreak || 0;
    if (progressTotalXpEl) progressTotalXpEl.textContent = userData?.totalXP || 0;


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
    if (leaderboardListenerUnsubscribe) {
         console.log("Detaching leaderboard listener during UI clear.");
         leaderboardListenerUnsubscribe();
         leaderboardListenerUnsubscribe = null;
      }
    // Reset dashboard stats
    updateStatisticsSection(null); // Pass null for default/zero state

    // Clear subject cards
    if (subjectStatsContainer) subjectStatsContainer.innerHTML = '<p style="grid-column: 1 / -1; text-align: center;">Pro zobrazení pokroku se přihlaste.</p>';

    // Clear progress table
    if (progressTableBody) {
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
    if (toggleFavoriteBtn) {
        toggleFavoriteBtn.style.display = 'none';
        toggleFavoriteBtn.disabled = true;
    }

    // Reset test section if needed (might happen automatically on navigation)
    if (testContainer) testContainer.innerHTML = '';
    if (testContainer) testContainer.style.display = 'none';
    if (subjectSelect) subjectSelect.value = '';
    if (topicSelect) topicSelect.innerHTML = '<option value="">Vyberte okruh</option>';
    if (topicSelect) topicSelect.disabled = true;
    if (generateTestBtn) generateTestBtn.disabled = true;
    if(profileSection) profileSection.style.display = 'none';

    // Calendar will be regenerated by auth listener with empty data
}

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
            console.warn(`parseCSV: Skipping invalid line ${i + 1} in ${subject} - ${topic}:`, lines[i]);
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
                            if (sel !== optionDiv) sel.classList.remove('selected');
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
        console.log(`Question ${qIndex + 1} (${questionType}): ${isQuestionCorrect ? 'Correct' : 'Incorrect'}`);

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
    userData.totalXP = (userData.totalXP || 0) + correct;
    userData.weeklyXP = (userData.weeklyXP || 0) + correct;// XP based on correct answers

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

    if (progressSection && progressSection.style.display === 'block') {
        console.log("Statistiky section is visible, refreshing leaderboard...");
        await refreshLeaderboard(); // Call the new refresh function
    }

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
    if (modal) modal.classList.remove('show'); // Hide modal if shown
    if (testContainer) {
        testContainer.innerHTML = ''; // Clear the test content
        testContainer.style.display = 'none';
    }
    if (subjectSelect) subjectSelect.value = "";
    if (topicSelect) {
        topicSelect.innerHTML = '<option value="">Vyberte okruh</option>';
        topicSelect.disabled = true;
    }
    if (generateTestBtn) {
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

function getActivityClass(count) {
    if (count === 0) return 'activity-none';
    if (count >= 1 && count <= 2) return 'activity-low';
    if (count >= 3 && count <= 4) return 'activity-medium';
    if (count >= 5 && count <= 6) return 'activity-high';
    return 'activity-very-high'; // 7+
}

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

function populateTopics(subject, userData) { // Pass userData
    if (!topicSelect || !generateTestBtn || !toggleFavoriteBtn) return;

    const currentTopicValue = topicSelect.value; // Store current selection

    topicSelect.innerHTML = '<option value="">Vyberte okruh</option>'; // Reset
    topicSelect.disabled = true;
    generateTestBtn.disabled = true;
    toggleFavoriteBtn.style.display = 'none'; // Hide favorite button by default
    toggleFavoriteBtn.disabled = true; // Disable by default

    if (subject && (data[subject] || dataFileConfig[subject])) { // Check config too
        let topics = Object.keys(dataFileConfig[subject] || {}); // Get topics from config

        // --- Handle Čeština Favorites ---
        if (subject === "Čeština") {
            const favoriteBooks = userData?.favoriteBooks || [];
            console.log("User favorite books:", favoriteBooks);
            topics.sort((a, b) => {
                const aIsFav = favoriteBooks.includes(a);
                const bIsFav = favoriteBooks.includes(b);
                if (aIsFav && !bIsFav) return -1;
                if (!aIsFav && bIsFav) return 1;
                return a.localeCompare(b, 'cs');
            });
            toggleFavoriteBtn.style.display = 'inline-block';
            // Enable button only if a valid topic is later selected
        } else {
            // Standard alphabetical sort for other subjects
            topics.sort((a, b) => a.localeCompare(b, 'cs'));
        }


        // --- Populate Options ---
        topics.forEach(topic => {
           if (!data[subject]?.[topic] && !dataFileConfig[subject]?.[topic]) {
                 console.warn(`Skipping topic "${topic}" for subject "${subject}" as no data/file found.`);
                 return; // Skip if no data/file associated
            }

            const option = document.createElement('option');
            option.value = topic;

            // Add star for favorite books
            let displayText = topic;
            if (subject === "Čeština" && userData?.favoriteBooks?.includes(topic)) {
                displayText = "★ " + topic; // Prepend star
            }
            option.textContent = displayText;

            topicSelect.appendChild(option);
        });

        topicSelect.disabled = false;

        // Restore previous selection if it still exists
        if (topics.includes(currentTopicValue)) {
            topicSelect.value = currentTopicValue;
            // Enable buttons if a valid topic is selected
            generateTestBtn.disabled = false;
            if (subject === "Čeština") {
                toggleFavoriteBtn.disabled = !(!currentTopicValue);
            }
        } else {
            // If previous selection is gone, ensure buttons are disabled
            generateTestBtn.disabled = true;
            toggleFavoriteBtn.disabled = true;
        }

    } else {
        // No subject selected or no topics found
        topicSelect.innerHTML = '<option value="">Nejprve vyberte předmět</option>';
        topicSelect.disabled = true;
        generateTestBtn.disabled = true;
        toggleFavoriteBtn.style.display = 'none';
        toggleFavoriteBtn.disabled = true;
    }
}
async function handleToggleFavorite() {
    if (!currentUser || !subjectSelect || !topicSelect || !db) {
        console.warn("Cannot toggle favorite: User not logged in or elements missing.");
        return;
    }

    const selectedSubject = subjectSelect.value;
    const selectedTopic = topicSelect.value;

    if (selectedSubject !== "Čeština" || !selectedTopic) {
        console.warn("Cannot toggle favorite: Not Čeština subject or no topic selected.");
        return;
    }

    // Disable button temporarily to prevent double clicks
    toggleFavoriteBtn.disabled = true;

    try {
        console.log(`Toggling favorite for: ${selectedTopic}`);
        // Fetch the LATEST user data before modifying
        const userData = await getUserData(currentUser, db);
        if (!userData) {
            throw new Error("Nepodařilo se načíst uživatelská data.");
        }

        // Initialize favoriteBooks if it doesn't exist
        userData.favoriteBooks = userData.favoriteBooks || [];

        const index = userData.favoriteBooks.indexOf(selectedTopic);

        if (index > -1) {
            // It's a favorite, remove it
            userData.favoriteBooks.splice(index, 1);
            console.log(`Removed ${selectedTopic} from favorites.`);
        } else {
            // It's not a favorite, add it
            userData.favoriteBooks.push(selectedTopic);
            console.log(`Added ${selectedTopic} to favorites.`);
        }

        // Save the updated data
        await saveUserData(currentUser, userData, db);
        console.log("User favorites saved.");

        populateTopics(selectedSubject, userData);

        toggleFavoriteBtn.disabled = !topicSelect.value;

    } catch (error) {
        console.error("Error toggling favorite:", error);
        alert("Chyba při ukládání oblíbené položky.");
        // Re-enable button even on error
        toggleFavoriteBtn.disabled = !topicSelect.value;
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
        showProfileSection();
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
    // Modify the event listener setup for registerBtn
registerBtn?.addEventListener('click', () => {
    if (loginForm.classList.contains('register-mode')) {
        // Already in register mode, perform registration
        registerUserHandler(auth);
    } else {
        // Switch to register mode
        loginForm.classList.add('register-mode');
        loginMessage.textContent = ''; // Clear login messages
        registerBtn.textContent = 'Dokončit registraci'; // Change button text
        if(loginBtn) loginBtn.style.display = 'none'; // Hide login button
    }
});
 // Add back listener for login button to potentially clear register mode if user clicks login again
loginBtn?.addEventListener('click', () => {
    if (loginForm.classList.contains('register-mode')) {
         // If user clicks Login while in register mode, switch back
         loginForm.classList.remove('register-mode');
         registerBtn.textContent = 'Registrovat se';
         if(loginBtn) loginBtn.style.display = 'block';
         loginMessage.textContent = ''; // Clear messages
    } else {
         // Perform login
         loginUserHandler(auth);
    }
});
profileLink?.addEventListener('click', (e) => {
    e.preventDefault();
    showProfileSection();
});
nicknameChangeForm?.addEventListener('submit', handleNicknameChange);
changePasswordBtn?.addEventListener('click', handleChangePassword);
deleteAccountBtn?.addEventListener('click', handleDeleteAccount); // Add delete listener
async function showProfileSection() {
    if (leaderboardListenerUnsubscribe) {
        console.log("Detaching previous leaderboard listener before showing Profile/Stats.");
        leaderboardListenerUnsubscribe();
        leaderboardListenerUnsubscribe = null; // Reset the variable
    }

    // 2. Show/Hide Sections
    if(loginSection) loginSection.style.display = 'none';
    if(dashboardSection) dashboardSection.style.display = 'none';
    if(testSection) testSection.style.display = 'none';
    // progressSection is removed
    if(profileSection) profileSection.style.display = 'block'; // Show this section

    if (currentUser) {
        console.log("Loading data for Profile/Stats section...");
        try {
            // Fetch core user data once
            const userData = await getUserData(currentUser, db);

            if (!userData) {
                // Handle case where user data couldn't be fetched even though logged in
                console.error("Could not fetch user data for logged-in user:", currentUser);
                throw new Error("Nepodařilo se načíst data uživatele."); // Throw to trigger catch block
            }

            // Populate standard Profile Info
            loadProfileData(); // Populates email/nickname/joined from auth/userData

            // Populate moved Stats elements (Streak/XP cards, Table)
            // Make sure updateProgressSection handles these elements correctly now
            updateProgressSection(userData);

            // Populate Achievements
            updateAchievementsUI(userData);

            // Attach Real-time Leaderboard Listener
            console.log("Attaching real-time leaderboard listener for Profile/Stats section...");
            const query = db.collection("users")
                            .orderBy("weeklyXP", "desc")
                            .limit(10);

            leaderboardListenerUnsubscribe = query.onSnapshot(querySnapshot => {
                console.log("Leaderboard snapshot received (Profile/Stats).");
                const topUsers = [];
                querySnapshot.forEach(doc => {
                    const data = doc.data();
                    // Extract data needed for the leaderboard UI
                     if (data.nickname && typeof data.weeklyXP === 'number') {
                         topUsers.push({
                             nickname: data.nickname,
                             xp: data.weeklyXP // Pass weeklyXP as 'xp' to the UI function
                         });
                     }
                });
                updateLeaderboardUI(topUsers); // Update the UI with processed data
            }, error => {
                // Handle listener errors
                console.error("Error fetching leaderboard snapshot (Profile/Stats):", error);
                if(leaderboardList) leaderboardList.innerHTML = '<li class="no-leaderboard">Chyba live žebříčku.</li>';
                // Detach listener on error? Maybe not, it might recover.
                // if (leaderboardListenerUnsubscribe) {
                //     leaderboardListenerUnsubscribe();
                //     leaderboardListenerUnsubscribe = null;
                // }
            });

        } catch (error) {
            // Handle errors during initial data fetch
            console.error("Error loading profile/stats section data:", error);
            // Clear relevant UI parts to show error state
            if(profileEmail) profileEmail.textContent = 'Chyba';
            if(profileNickname) profileNickname.textContent = 'Chyba';
            if(profileJoined) profileJoined.textContent = 'Chyba';
            updateProgressSection(null); // Clear stats table/cards
            updateAchievementsUI(null); // Clear achievements
            updateLeaderboardUI([]);    // Clear leaderboard
        }
    } else {
        // --- USER IS LOGGED OUT ---
        // Clear all profile/stats UI elements
         if(profileEmail) profileEmail.textContent = 'N/A';
         if(profileNickname) profileNickname.textContent = 'N/A';
         if(profileJoined) profileJoined.textContent = 'N/A';
         // Also clear form messages/inputs if desired
         if(nicknameChangeForm) nicknameChangeForm.reset();
         if(nicknameChangeMessage) nicknameChangeMessage.textContent = '';
         if(passwordChangeMessage) passwordChangeMessage.textContent = '';
         if(deleteAccountMessage) deleteAccountMessage.textContent = '';

        updateProgressSection(null);
        updateAchievementsUI(null);
        updateLeaderboardUI([]);
        // Listener should have already been detached by showLogin or clearUserDataUI,
        // but double-check just in case.
         if (leaderboardListenerUnsubscribe) {
             console.warn("Detaching leaderboard listener in showProfileSection (User logged out - safety check).");
             leaderboardListenerUnsubscribe();
             leaderboardListenerUnsubscribe = null;
         }
    }
}
async function loadProfileData() {
    if (!currentUser || !auth.currentUser || !profileEmail || !profileNickname || !profileJoined) return;

    profileEmail.textContent = auth.currentUser.email || 'N/A';

    try {
        const userData = await getUserData(currentUser, db);
        if (userData) {
            profileNickname.textContent = userData.nickname || 'Nenastaveno';

            if (userData.createdAt && userData.createdAt.toDate) {
                // Format the timestamp
                const joinDate = userData.createdAt.toDate();
                profileJoined.textContent = joinDate.toLocaleDateString('cs-CZ', {
                    day: 'numeric', month: 'long', year: 'numeric'
                });
            } else {
                profileJoined.textContent = 'Neznámé';
            }
            // Pre-fill nickname change input? Optional.
            // if(newNicknameInput) newNicknameInput.value = userData.nickname || '';
        } else {
             profileNickname.textContent = 'Chyba';
             profileJoined.textContent = 'Chyba';
        }
    } catch (error) {
        console.error("Error loading profile data:", error);
        profileNickname.textContent = 'Chyba načítání';
        profileJoined.textContent = 'Chyba načítání';
    }
}
async function handleNicknameChange(event) {
    event.preventDefault(); // Prevent form submission
    if (!currentUser || !newNicknameInput || !nicknameChangeMessage || !changeNicknameBtn) return;

    const newNickname = newNicknameInput.value.trim();
    console.log("DEBUG: Nickname read from input:", nickname);
    nicknameChangeMessage.textContent = ''; // Clear previous message
    nicknameChangeMessage.className = ''; // Clear success/error class

    // Validation
    const nicknamePattern = /^[a-zA-Z0-9_]{3,15}$/;
    if (!nicknamePattern.test(newNickname)) {
        nicknameChangeMessage.textContent = "Nová přezdívka má neplatný formát.";
        nicknameChangeMessage.classList.add('error');
        return;
    }

    changeNicknameBtn.disabled = true;
    nicknameChangeMessage.textContent = 'Ověřuji a ukládám...';

    try {
        const userData = await getUserData(currentUser, db);
        const oldNickname = userData?.nickname;
         const oldNicknameLower = oldNickname?.toLowerCase();
         const newNicknameLower = newNickname.toLowerCase();


        if (oldNicknameLower === newNicknameLower) {
            nicknameChangeMessage.textContent = "Nová přezdívka je stejná jako stará.";
            changeNicknameBtn.disabled = false;
            return;
        }

        // Check uniqueness ONLY if it's different
        const isUnique = await checkNicknameUniqueness(newNickname);
        if (!isUnique) {
            nicknameChangeMessage.textContent = "Tato přezdívka je již obsazena.";
            nicknameChangeMessage.classList.add('error');
            changeNicknameBtn.disabled = false;
            return;
        }

        // Transaction to update user doc and nickname collection
        const userDocRef = db.collection("users").doc(currentUser);
        const newNicknameDocRef = db.collection("nicknames").doc(newNicknameLower);
         const oldNicknameDocRef = oldNickname ? db.collection("nicknames").doc(oldNicknameLower) : null;


        await db.runTransaction(async (transaction) => {
            // 1. Delete old nickname reservation (if exists)
            if (oldNicknameDocRef) {
                transaction.delete(oldNicknameDocRef);
            }
            // 2. Create new nickname reservation
            transaction.set(newNicknameDocRef, { userId: currentUser });
            // 3. Update nickname in user document
            transaction.update(userDocRef, { nickname: newNickname });
        });

        nicknameChangeMessage.textContent = "Přezdívka úspěšně změněna!";
        nicknameChangeMessage.classList.add('success');
         if(profileNickname) profileNickname.textContent = newNickname; // Update UI immediately
        newNicknameInput.value = ''; // Clear input


    } catch (error) {
        console.error("Error changing nickname:", error);
        nicknameChangeMessage.textContent = "Chyba při změně přezdívky.";
        nicknameChangeMessage.classList.add('error');
    } finally {
        changeNicknameBtn.disabled = false;
    }
}
async function handleChangePassword() {
    if (!auth || !auth.currentUser || !passwordChangeMessage || !changePasswordBtn) return;

    const email = auth.currentUser.email;
    passwordChangeMessage.textContent = '';
    passwordChangeMessage.className = '';
    changePasswordBtn.disabled = true;

    try {
        await auth.sendPasswordResetEmail(email);
        passwordChangeMessage.textContent = `Odkaz pro reset hesla byl zaslán na ${email}. Zkontrolujte si poštu (i spam).`;
        passwordChangeMessage.classList.add('success');
    } catch (error) {
        console.error("Error sending password reset email:", error);
        passwordChangeMessage.textContent = "Chyba při zasílání emailu: " + mapAuthError(error);
         passwordChangeMessage.classList.add('error');
         changePasswordBtn.disabled = false; // Re-enable only on error
    }
    // Keep button disabled on success to prevent spamming
}
async function handleDeleteAccount() {
    if (!auth || !auth.currentUser || !db || !deleteAccountBtn || !deleteAccountMessage) return;
    
    const user = auth.currentUser;
    const uid = user.uid;
    const userEmail = user.email; // For confirmation message
    
    // --- Confirmation ---
    const confirmation = prompt(`Opravdu chcete trvale smazat svůj účet (${userEmail})? Tato akce je nevratná! Napište "SMAZAT" pro potvrzení:`);
    if (confirmation !== "SMAZAT") {
    deleteAccountMessage.textContent = "Smazání účtu zrušeno.";
    return;
    }
    deleteAccountBtn.disabled = true;
deleteAccountMessage.textContent = "Mažu účet a data...";
deleteAccountMessage.className = '';
try {
    // 1. Get user data to find nickname
  const userData = await getUserData(uid, db);
  const nickname = userData?.nickname;
  const nicknameLower = nickname?.toLowerCase();

  // 2. Delete Firestore Data (User Doc and Nickname Reservation) in Transaction
  const userDocRef = db.collection("users").doc(uid);
   const nicknameDocRef = nicknameLower ? db.collection("nicknames").doc(nicknameLower) : null;


  await db.runTransaction(async (transaction) => {
      if (nicknameDocRef) {
           // Check if nickname doc still exists before deleting
           const nickDoc = await transaction.get(nicknameDocRef);
           if (nickDoc.exists) {
               transaction.delete(nicknameDocRef);
           }
      }
      // Check if user doc exists before deleting
       const userDoc = await transaction.get(userDocRef);
       if (userDoc.exists) {
           transaction.delete(userDocRef);
       }
  });
  console.log("Firestore data deleted for user:", uid);

  // 3. Delete Firebase Auth User
  await user.delete();

  // Auth state listener will handle UI changes (logout, show login)
  console.log("Firebase Auth user deleted successfully.");
  alert("Váš účet byl úspěšně smazán.");
} catch (error) {
    console.error("Error deleting account:", error);
    deleteAccountMessage.textContent = "Chyba při mazání účtu: " + mapAuthError(error);
    deleteAccountMessage.classList.add('error');
    if (error.code === 'auth/requires-recent-login') {
    deleteAccountMessage.textContent += " Prosím, odhlaste se a znovu přihlaste, poté zkuste smazání znovu.";
    }
    deleteAccountBtn.disabled = false; // Re-enable on error
    }
    }

    // Test Generation Controls
    subjectSelect?.addEventListener('change', async function () { // Make async
        const selectedSubject = this.value;
        let currentUserData = null;
        if (currentUser) {
            // Fetch fresh data when subject changes to ensure favorites are up-to-date
            currentUserData = await getUserData(currentUser, db);
        }
        populateTopics(selectedSubject, currentUserData); // Pass user data
    });
    topicSelect?.addEventListener('change', function () {
        const isTopicSelected = !!this.value; // Check if a non-empty topic is selected
        const isCestina = subjectSelect.value === "Čeština";

        generateTestBtn.disabled = !isTopicSelected;
        if (toggleFavoriteBtn) {
            toggleFavoriteBtn.disabled = !(isTopicSelected && isCestina); // Enable only for selected Čeština topic
        }
    });
    generateTestBtn?.addEventListener('click', generateTest);

    // Modal Controls
    closeModalBtn?.addEventListener('click', () => {
        if (modal) modal.classList.remove('show');
    });
    backToTestsModalBtn?.addEventListener('click', () => { // Use correct button ID
        handleBackToTestSelection();
    });
    toggleFavoriteBtn?.addEventListener('click', handleToggleFavorite);
    window.addEventListener('click', (event) => { // Close modal on outside click
        if (event.target === modal) {
            if (modal) modal.classList.remove('show');
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
}
/**
 * Fetches top N users based on total XP from Firestore.
 * @param {number} limit - Number of users to fetch.
 * @returns {Promise<Array<{nickname: string, xp: number}>>}
 */
async function fetchLeaderboardData(limit = 10) {
    if (!db) return [];
    try {
        const querySnapshot = await db.collection("users")
            // This line was changed from "totalXP" to "weeklyXP"
            .orderBy("weeklyXP", "desc")
            .limit(limit)
            .get();

        const topUsers = [];
        querySnapshot.forEach(doc => {
            const data = doc.data();
            if (data.nickname && typeof data.weeklyXP === 'number') {
                topUsers.push({
                    nickname: data.nickname,
                    // This now represents the weekly XP value
                    xp: data.weeklyXP
                });
            }
        });
        return topUsers;
    } catch (error) {
        console.error("Error fetching weekly leaderboard data:", error);
        return [];
    }
}

/**
 * Updates the leaderboard UI in the progress section.
 * @param {Array<{nickname: string, xp: number}>} leaderboardData
 */
function updateLeaderboardUI(leaderboardData) {
    if (!leaderboardList) return;

    leaderboardList.innerHTML = ''; // Clear previous entries

    if (!leaderboardData || leaderboardData.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'Žebříček je zatím prázdný.';
        li.style.textAlign = 'center';
        li.style.color = '#718096';
         li.style.listStyle = 'none';
        leaderboardList.appendChild(li);
        return;
    }

    leaderboardData.forEach((user, index) => {
        const li = document.createElement('li');
        // Create spans for better styling control
        const nameSpan = document.createElement('span');
        nameSpan.textContent = `${index + 1}. ${user.nickname}`;

        const xpSpan = document.createElement('strong'); // Use strong for XP
        xpSpan.textContent = `${user.xp} XP`;

        li.appendChild(nameSpan);
        li.appendChild(xpSpan);
        leaderboardList.appendChild(li);
    });
}

