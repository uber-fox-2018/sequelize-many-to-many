function convertScore(score){
    if(score>85){
        score = "A";
    }else if(score>70){
        score = "B";
    }else if(score>55){
        score = "C";
    }else if(score<=55 && score!==null){
        score = "E";
    }else if(score===null){
        score = "Empty";
    }
    return score;
}

module.exports = convertScore;