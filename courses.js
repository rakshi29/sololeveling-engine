const CONFIG = require('./config.js')

// ============================================
// Courses — add and track study subjects
// ============================================

function createCourse(name, color) {
    return {
        id: Date.now(),
        name: name,
        color: color,
        totalHoursStudied: 0,
        quizScores: [],
        notes: [],
        createdAt: new Date().toDateString()
    }
}

function addStudyHours(course, hours) {
    course.totalHoursStudied += hours
    return course
}

function addQuizScore(course, score) {
    course.quizScores.push({
        score: score,
        date: new Date().toDateString()
    })
    return course
}

function addNote(course, noteText) {
    course.notes.push({
        text: noteText,
        date: new Date().toDateString()
    })
    return course
}

function getCourseAverage(course) {
    if (course.quizScores.length === 0) return 0
    let total = 0
    for (let i = 0; i < course.quizScores.length; i++) {
        total += course.quizScores[i].score
    }
    return Math.round(total / course.quizScores.length)
}

function getCourseReport(course) {
    console.log("=============================")
    console.log("📚 Course:", course.name)
    console.log("⏱️  Total hours:", course.totalHoursStudied)
    console.log("📊 Quiz average:", getCourseAverage(course) + "%")
    console.log("📝 Notes saved:", course.notes.length)
    console.log("=============================")
}

module.exports = {
    createCourse,
    addStudyHours,
    addQuizScore,
    addNote,
    getCourseReport
}