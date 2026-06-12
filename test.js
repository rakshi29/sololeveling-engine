const { createPlayer } = require('./player.js')
const { endOfDay } = require('./session.js')
const { createCourse, addStudyHours, addQuizScore, addNote, getCourseReport } = require('./courses.js')

let raksh = createPlayer("Raksh", 4, 6)

console.log("\n--- DAY 1: Normal day ---")
raksh = endOfDay(raksh, [
    { course: "Java", hours: 2 },
    { course: "Math", hours: 2 }
], true)

console.log("\n--- DAY 2: Long study day ---")
raksh = endOfDay(raksh, [
    { course: "Java", hours: 3 },
    { course: "Math", hours: 2 },
    { course: "ServiceNow", hours: 1 }
], true)

console.log("\n--- DAY 3: Missed goal ---")
raksh = endOfDay(raksh, [
    { course: "Java", hours: 1 },
    { course: "Math", hours: 1 }
], false)

console.log("\n--- DAY 4: Recovery ---")
raksh = endOfDay(raksh, [
    { course: "Java", hours: 2 },
    { course: "ServiceNow", hours: 2 }
], true)

console.log("\n--- COURSE TRACKING ---")
let java = createCourse("Java", "#FF5722")
java = addStudyHours(java, 3)
java = addQuizScore(java, 88)
java = addNote(java, "Finished OOP chapter")
getCourseReport(java)

console.log("\n--- PLAYER SUMMARY ---")
console.log("Name:", raksh.name)
console.log("Level:", raksh.level)
console.log("XP:", raksh.xp)
console.log("Streak:", raksh.streak)
console.log("Longest streak:", raksh.longestStreak)
console.log("Daily goal:", raksh.dailyGoalHours, "hrs")
console.log("Daily max:", raksh.maxDailyHours, "hrs")
console.log("Badges:", raksh.badges)