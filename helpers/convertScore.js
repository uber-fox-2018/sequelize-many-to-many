function convertScore(nilai) {
  if (nilai >= 85 && nilai <= 100) {
    return 'A'
  } else if (nilai >= 70 && nilai <= 84) {
    return 'B'
  } else if (nilai >= 55 && nilai <= 69) {
    return 'C'
  } else if (nilai >= 0 && nilai <= 55) {
    return 'D'
  }
}

module.exports = convertScore