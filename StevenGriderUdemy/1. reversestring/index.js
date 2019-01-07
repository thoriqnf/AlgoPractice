// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

module.exports = reverse;

// 1st solution (3 steps)
// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

// .reverse hanya bisa untuk array dan tak bisa untuk string makanya di awal di split dulu untuk chunk dari string ke array dan di sambungkan lagi pakai .join

// 2nd solution (using for loop)
// function reverse(str) {
//   let reverse = '';

//   for (let characters of str) {
//     reverse = characters + reverse;
//   }

//   return reverse;
// }

// 3rd Solution using reduce
// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev, '');
// }
