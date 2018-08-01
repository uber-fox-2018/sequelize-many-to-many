module.exports = score => {
    if(score == null)
        return 'empty'
    else if(score > 85)
        return 'A'
    else if(score <= 85 && score > 75)
        return 'B'
    else if(score <= 75 && score > 55)
        return 'C'
    else if (score <= 55 && score >= 0)
        return 'E'
}