function finAverage(array) {
  var total = 0;
  array.forEach(x => (total += x));
  return total / array.length;
}
