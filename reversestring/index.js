// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reverse = '';

  for (let characters of str) {
    reverse = characters + reverse;
  }

  return reverse;


module.exports = reverse;

// 1st solution (3 steps)
// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }