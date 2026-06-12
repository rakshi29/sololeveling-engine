const { createPlayer } = require('./player.js')
const { endOfDay } = require('./session.js')

let raksh = createPlayer("Raksh", 4)  // 4 hour daily goal

console.log("\n--- DAY 1: Full goal met ---")
raksh = endOfDay(raksh, 4, true)   // 4hrs + quiz → 12 XP

console.log("\n--- DAY 2: Half goal met ---")
raksh = endOfDay(raksh, 2, false)  // +4 XP earned, -2 XP penalty = net +2

console.log("\n--- DAY 3: Almost nothing ---")
raksh = endOfDay(raksh, 1, false)  // +2 XP earned, -3 XP penalty = net -1 but floor is 0

console.log("\n--- DAY 4: Full recovery ---")
raksh = endOfDay(raksh, 4, true)   // back to full, streak rebuilds