// --- Directions
// Given a string, return a new string with the reversed
// order of words without using split, reverse, etc.
// --- Examples
//   reverse('I look') === 'look I'
//   reverse('I look so happy') === 'happy so look I'

function reverse(str) {
  return str.match(/\S+/g).reduce((accum, word) => word + " " + accum, "").trim();
}

module.exports = reverse;
