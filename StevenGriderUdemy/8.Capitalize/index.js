// Diretions
// Write a function that accpets a string. The function should capitalize the first letter of each word in string then
// Return the capitalized string
// Example
// Capitalize('a short sentece') --> 'A Short Sentece'
// Capitalize('a lazy fix) --> 'A Lazy Fox'
// Capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const words = [];

  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(" ");
}
// function join perlu di perhatiin butuh string dan spasinya atau ga

module.exports = capitalize;
