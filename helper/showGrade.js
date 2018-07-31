// module.exports = {
//     showGrade: function showGrade(score){
//         if(score > 85) {
//             return 'A'
//         } else if(score > 70) {
//             return 'B'
//         } else if (score > 55) {
//            return 'C'
//         } else if(score <= 55) {
//            return 'E'
//         } else {
//           return  'Empty'
//         }
//     }
// }

function showGrade(score){
    if(score > 85) {
       return  'A'
    } else if(score > 70) {
        return 'B'
    } else if (score > 55) {
       return 'C'
    } else if(score <= 55 && score !== null) {
       return 'E'
    } else if(score === null){
      return 'Empty'
    }
}

module.exports = showGrade