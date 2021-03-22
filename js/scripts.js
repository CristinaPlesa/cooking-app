function gallonsToLiters(gallons) {
  return gallons * 3.78541;
}

const gallons = prompt("Enter number of gallons:");
  alert("The number of liters is " + gallonsToLiters(gallons));

function ouncesToGrams(ounces) {
  return ounces * 28.3495;
}

const ounces = prompt("Enter the number of ounces:");
  alert("The number of grams is " + ouncesToGrams(ounces) + "oz");

function cupsToLiters(cups) {
  return cups * 0.236588;
}

const cups = prompt("Enter number of cups:");
  alert("The number of liters is " + cupsToLiters(cups) + "L");
