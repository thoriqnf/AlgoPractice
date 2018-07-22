// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // Using Ternary
  const charMap = {};
  let max = 0;
  let macChar = '';

  // Code Splitting to get total character 
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  // Buat penampung untuk max character
  for (let char in charMap) {
    if (charMap[char] > max){
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;

// Using Ternary
// const string = "Hello There!";
// const chars = {};

// for (let char of string) {
//   chars[char] = chars[char] + 1 || 1;
// }

// chars;


// Using if else
// const string = "Hello There!";
// const chars = {};

// for (let char of string){
//   if (!chars[char]) {
//     chars[char] = 1;
//   } else {
//     chars[char]++;
//   }
// }