// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// 1st Solution (3 steps straight forward)
// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

// .reverse hanya bisa untuk array dan tak bisa untuk string makanya di awal di split dulu untuk chunk dari string ke array dan di sambungkan lagi pakai .join

// 2nd solution (for loop)
// function reverse(str) {
//   let reversed = '';
//   for (let character of str ){
//     reversed = character + reversed;
//   }
//   return reversed;
// }

// 3rd Solution (reduce)

// function reversed(str) {
//   return str.split("").reduce((rev, char) => char + rev, "");
// }

// reduce is function es 5.1, bikin array jadi single value

// module.exports ini gunanya ngexport nama functionnya

module.exports = reversed;
