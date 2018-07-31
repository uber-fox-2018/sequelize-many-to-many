function getScore(student) {
    if (student.score == null) {
        return `link`
    }
    return student.score
}

module.exports = getScore