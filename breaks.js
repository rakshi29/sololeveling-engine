const CONFIG = require('./config.js')

// ============================================
// Breaks — health reminders during study
// ============================================

function shuffleActivities(activities) {
    let shuffled = [...activities]  // copy so original stays safe
    for (let i = shuffled.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = shuffled[i]
        shuffled[i] = shuffled[j]
        shuffled[j] = temp
    }
    return shuffled
}

function checkBreaks(hoursStudied) {
    let breakInterval = CONFIG.limits.breakEveryHours
    let breaksTaken = Math.floor(hoursStudied / breakInterval)

    if (breaksTaken === 0) return

    // Shuffle so no repeats in same day
    let activities = shuffleActivities(CONFIG.breakActivities)

    console.log("\n⏰ BREAK REMINDERS FOR TODAY:")
    for (let i = 0; i < breaksTaken; i++) {
        console.log("   After hour " + ((i + 1) * breakInterval) + ": " + activities[i])
    }
}

function validateHours(player, hoursStudied) {
    if (hoursStudied > player.maxDailyHours) {
        console.log("⚠️  Logged hours exceed your daily max of " + player.maxDailyHours + " hrs")
        console.log("⚠️  Capping at " + player.maxDailyHours + " hrs — your health matters more than XP")
        return player.maxDailyHours
    }
    return hoursStudied
}

module.exports = { checkBreaks, validateHours }