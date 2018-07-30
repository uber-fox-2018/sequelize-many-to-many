module.exports = (id, score) => {
    // const link = `<a href="/subjects/${id}/give-score" role="button" class="btn btn-info">Give Score</a>`
    // const link = `<button type="button" class="btn btn-info" data-toggle="modal" data-target="#give_score_modal">Give Score</button>`
    const link = `<button type="button" class="btn btn-info give-score-button">Give Score</button>`
    return score == null ? link : score
}