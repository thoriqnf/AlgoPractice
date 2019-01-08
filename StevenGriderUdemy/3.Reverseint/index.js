// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Reverse Integer tapi kalo minus di reverse juga, kalo ada 0 nya di depan di kosongin
// Using 3 technique toString untuk ngerubah number jadi string, parseInt balikin string jadi number & Math.sign untuk ngehandle kalo ada minus

function reverseInt(n) {
  const reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
