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
        minimumHours: 1,      // user can set their own, this is the floor
        defaultDailyHours: 4, // suggested default
    },

    // Punishment Settings
    punishment: {
        missedByLessThan1Hour: -2,
        missedBy1to2Hours: -5,
        missedByMoreThan2Hours: -10,
    },

    // Level System
    levels: {
        daysPerLevel: 7,       // 7 consecutive days = level up
        maxLevel: 100,
    },

    // Badge Thresholds (streak days required)
    badges: {
        noviceWarrior: 7,
        disciplinedMage: 14,
        shadowMonarch: 21,
        legendLearner: 30,
    },

    // Chatbot (placeholder for future AI integration)
    chatbot: {
        enabled: false,        // flip to true when we add AI
        model: "gpt-4",        // ready for future use
        personality: "strict motivational coach",
    }
}

module.exports = CONFIG