let age = 32;
let adultYears;

function calculateAdultYears(userAge) {
  return userAge - 18;
}

console.log(age);
adultYears = calculateAdultYears(age);
console.log(adultYears);

age = 45;
adultYears = calculateAdultYears(age);
console.log(adultYears);
