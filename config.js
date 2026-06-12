// ============================================
// my_sololeveling — App Configuration
// Change values here to update the whole app
// ============================================

const CONFIG = {
    // XP Settings
    xp: {
        perHour: 2,
        quizCompletion: 4,
        perStreakDay: 1,
        maxDailyXP: 20,
    },

    // Study Goals
    study: {
        minimumHours: 1,
        defaultDailyHours: 4,
    },

    // Study Limits
    limits: {
        defaultMaxHours: 8,
        breakEveryHours: 2,
    },

    // Punishment Settings
    punishment: {
        xpPerMissedHour: 1,
    },

    // Level System
    levels: {
        daysPerLevel: 7,
        maxLevel: 100,
    },

    // Badge Thresholds
    badges: {
        noviceWarrior: 7,
        disciplinedMage: 14,
        shadowMonarch: 21,
        legendLearner: 30,
    },

    // Break Activities
    breakActivities: [
        "🧘 Take 5 deep breaths — inhale 4 counts, exhale 4 counts",
        "💧 Drink a full glass of water right now",
        "🚶 Stand up and walk around for 5 minutes",
        "👁️  Look at something 20 feet away for 20 seconds — rest your eyes",
        "🤸 Do 10 shoulder rolls and stretch your neck",
        "🙆 Stand up and stretch your arms above your head for 30 seconds",
        "😴 Close your eyes and rest them completely for 2 minutes",
        "🦵 Do 10 squats — get the blood flowing",
    ],

    // Chatbot (placeholder for future AI integration)
    chatbot: {
        enabled: false,
        model: "gpt-4",
        personality: "strict motivational coach",
    },
}

module.exports = CONFIG