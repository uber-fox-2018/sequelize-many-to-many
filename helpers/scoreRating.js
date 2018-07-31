function scoreRating(score){
let result = ''
if(score >= 85){
    result += 'A'
}else if(score < 85 && score >=70){
    result += 'B'
}else if(score<70 && score>=55 ){
    result += 'C'
}else if(score> 0 && score<= 55){
    result += 'E'
}else{
    result += 'Empty'
}
return result
}

module.exports = scoreRating

// console.log(scoreRating(0))