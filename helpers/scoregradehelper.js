function convertScore(score) {
    let str = '';
    if (score > 100) {
        return 'INVALID';
    }
    if (score > 85 && score <= 100) {
        str = 'A';
    } else if (score > 70 && score <= 84) {
        str = 'B';
    } else if (score > 55 && score <= 69) {
        str = 'C';
    } else if (score > 0 && score <= 55) {
        str = 'E';
    } else {
        str = 'empty';
    }
    return str;
} 

module.exports = convertScore;