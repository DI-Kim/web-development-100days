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

let person = {
  // property
  name: "bigPerson",
  // method
  greet() {
    console.log("Hello");
  },
};

person.greet();

console.log("app.js finish✅");
console.log("");
