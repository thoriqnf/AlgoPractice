// Diretions
// Write a function that accpets a string. The function should capitalize the first letter of each word in string then
// Return the capitalized string
// Example
// Capitalize('a short sentece') --> 'A Short Sentece'
// Capitalize('a lazy fix) --> 'A Lazy Fox'
// Capitalize('look, it is working!') --> 'Look, It Is Working!'

// 1st solution
// function capitalize(str) {
//   const words = [];

//   for (let word of str.split(" ")) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }

//   return words.join(" ");
//}
// function join perlu di perhatiin butuh string dan spasinya atau ga

// 2nd Solution
function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

module.exports = capitalize;
