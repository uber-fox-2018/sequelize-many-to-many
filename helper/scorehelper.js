function helpGetScore (id,score){
    let link = `<a href="/subjects/addScore/${id}">Get Score</a>`
    return score !== null ? score : link 
}

module.exports = helpGetScore
