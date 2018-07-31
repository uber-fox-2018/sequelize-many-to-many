function getScore(score) {

    if (score > 100) {
        return `Invalid Score`
    }
    if (score > 85) {
        return `A`
    }else if (score > 70) {
        return `B`
    }else if (score > 55) {
        return `C`
    }else if (score > 0) {
        return `E`
    }else {
        return `Empty`
    }
}

module.exports = getScore