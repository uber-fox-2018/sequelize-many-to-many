module.exports = (score) => {
    const link = `<button type="button" class="btn btn-info give-score-button">Give Score</button>`
    return score == null ? link : score
}