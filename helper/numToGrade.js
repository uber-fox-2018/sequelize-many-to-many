function numToGrade(score) {
  switch (true) {
    case score >= 85:
      return "A";
      break;

    case score > 70:
      return "B";
      break;

    case score > 55:
      return "C";
      break;

    case score <= 55:
      return "D";
      break;

    default:
      return "------";
      break;
  }
}

module.exports = numToGrade


// console.log(numToGrade());
