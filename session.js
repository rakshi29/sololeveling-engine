const CONFIG = require('./config.js')
const { addXP, checkLevelUp, checkBadge } = require('./player.js')
const { checkBreaks, validateHours } = require('./breaks.js')

// ============================================
// Session — end of day calculation engine
// ============================================

function calculateXP(hoursStudied, quizCompleted) {
    let studyXP = hoursStudied * CONFIG.xp.perHour
    let quizXP = quizCompleted ? CONFIG.xp.quizCompletion : 0
    let total = studyXP + quizXP

    if (total > CONFIG.xp.maxDailyXP) total = CONFIG.xp.maxDailyXP

    return Math.round(total)
}

function applyPunishment(player, hoursStudied) {
    let goal = player.dailyGoalHours
    let missedHours = goal - hoursStudied

    if (missedHours <= 0) return player

    let penalty = -(missedHours * CONFIG.punishment.xpPerMissedHour)
    let message = "💀 Missed " + missedHours + " hrs → " + penalty + " XP penalty"

    console.log(message)
    player = addXP(player, penalty)
    return player
}

function endOfDay(player, hoursStudied, quizCompleted) {
    // Validate hours against max limit
    hoursStudied = validateHours(player, hoursStudied)

    // Show break reminders
    checkBreaks(hoursStudied)

    let goalMet = hoursStudied >= player.dailyGoalHours

    console.log("=============================")
    console.log("📅 END OF DAY —", player.name)
    console.log("=============================")
    console.log("🎯 Goal:", player.dailyGoalHours, "hrs | Studied:", hoursStudied, "hrs")
    console.log("✅ Goal met:", goalMet)

    if (goalMet) {
        let earned = calculateXP(hoursStudied, quizCompleted)
        player = addXP(player, earned)
        player.streak += 1
        player.streak > player.longestStreak
            ? player.longestStreak = player.streak
            : null
        console.log("⚡ XP earned:", earned)
        console.log("🔥 Streak:", player.streak, "days")
    } else {
        let earned = calculateXP(hoursStudied, quizCompleted)
        player = addXP(player, earned)
        console.log("⚡ XP earned for studied hours:", earned)
        player = applyPunishment(player, hoursStudied)
        player.streak = 0
        console.log("💔 Streak reset to 0")
    }

    player = checkLevelUp(player)
    player = checkBadge(player)

    console.log("=============================")
    console.log("📊 Total XP:", player.xp)
    console.log("🏆 Level:", player.level)
    console.log("🎖️  Badges:", player.badges.length > 0 ? player.badges : "None yet")
    console.log("=============================")

    return player
}

module.exports = { endOfDay, calculateXP }