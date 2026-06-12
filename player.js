const CONFIG = require('./config.js')

// ============================================
// Player — creates and manages a user profile
// ============================================

function createPlayer(name, dailyGoalHours, maxDailyHours) {
    let goal = dailyGoalHours < CONFIG.study.minimumHours
        ? CONFIG.study.minimumHours
        : dailyGoalHours

    let max = maxDailyHours || CONFIG.limits.defaultMaxHours

    // Max must always be higher than goal
    if (max <= goal) max = goal + 2

    return {
        name: name,
        dailyGoalHours: goal,
        maxDailyHours: max,
        level: 1,
        xp: 0,
        streak: 0,
        longestStreak: 0,
        badges: [],
        courses: [],
        createdAt: new Date().toDateString()
    }
}

function addXP(player, amount) {
    let newXP = player.xp + amount
    if (newXP < 0) newXP = 0
    player.xp = newXP
    return player
}

function checkLevelUp(player) {
    let expectedLevel = Math.floor(player.streak / CONFIG.levels.daysPerLevel) + 1
    if (expectedLevel > player.level) {
        player.level = expectedLevel
        console.log("🎉 LEVEL UP! " + player.name + " is now Level " + player.level)
    }
    return player
}

function checkBadge(player) {
    let streak = player.streak
    let badges = CONFIG.badges
    let newBadge = null

    if (streak >= badges.legendLearner) newBadge = "Legend Learner 🏆"
    else if (streak >= badges.shadowMonarch) newBadge = "Shadow Monarch 👑"
    else if (streak >= badges.disciplinedMage) newBadge = "Disciplined Mage 🧙"
    else if (streak >= badges.noviceWarrior) newBadge = "Novice Warrior ⚔️"

    if (newBadge && !player.badges.includes(newBadge)) {
        player.badges.push(newBadge)
        console.log("🏅 Badge unlocked:", newBadge)
    }

    return player
}

module.exports = { createPlayer, addXP, checkLevelUp, checkBadge }