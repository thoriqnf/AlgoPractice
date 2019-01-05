function bmi(weight, height) {
  var bmiR = weight / Math.pow(height, 2)
  if (bmiR <= 18.5) {
    return "Underweight";
  }
  if (bmiR <= 25) {
    return "Normal";
  }
  if (bmiR <= 30) {
    return "Overweight";
  }
  else {
    return "Obese"
  }
  return "";
}