// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Palindrome intinya ada string yang wajib kebalikannya sama persis

// 1st solution
// function palindrome(str) {
//   const reversed = str
//     .split("")
//     .reverse()
//     .join("");
//   return str === reversed;
// }
// Sama kayak reverse string cuman di bandingin dari awal sama yang baru

// 2nd solution
// function palindrome(str) {
//   return str.split("").every((char, i) => {
//     return char === str[str.length - i - 1];
//   });
// }
// Pakai function every jadi nanti setiap characternya di bandingin tapi harus buat array perbandingan dia

module.exports = palindrome;

// intermezzo
// Ngambil every value dari array yang lebih ari 5

// array.every((val) => val > 5);
