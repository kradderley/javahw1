// Homework 1
// 1
var myName = "Khes";
var myAge = 25;
var isDeveloper = "true";
console.log(myName);
console.log(myAge);
console.log(isDeveloper);

// 2
var dig1 = 15;
var dig2 = 25;
console.log(dig1 + dig2);

// 3
let number = 79;
console.log(number++);
console.log(number);

// 4
let digit = 100;
console.log(digit--);
console.log(digit);

// 5
var dig1 = "15";
var dig2 = "25";
console.log(dig1 + dig2);

// 6
var yearsInSchool = 10;
if (yearsInSchool > 5) {
  console.log("Congratulations, you are smart!");
}

//7
var countriesVisted = 10;
var age = 18;

if (countriesVisted > 3 && age >= 18) {
  console.log("You are a world-travelling adult!");
}

// 8
var person = {
  name: "Patty",
  age: 35,
  height: "160cm",
};
console.log(person);

// Homework 2
// 1
function add(a, b) {
  return a + b;
}

const result = add(10, 10);
console.log(result);

// 2

// 3
var populatedCountries = ["India", "China", "USA", "Brazil", "Indonesia"];
console.log(populatedCountries);

console.log(populatedCountries[0]);

// 4
// for of
var populatedCountries = ["India", "China", "USA", "Brazil", "Indonesia"];
for (var item of populatedCountries) {
  console.log(item);
}

// for each
populatedCountries.forEach((item) => {
  console.log(item);
});

// for (full blown)
for (var i = 0; i < populatedCountries.length; i++) {
  console.log(populatedCountries[i]);
}

// 5
var myFaves = {
  favoriteSport: "Boxing",
  favoriteColor: "Red",
  favoriteFood: "Eggs",
  favoriteDrink: "Water",
};
console.log(myFaves);

//6
myFaves.favoriteCity = "New York";
console.log(myFaves);

// 7 
myFaves["favoriteBrand"] = "Adidas";
console.log(myFaves);

// 8
for (var favorite in myFaves) {
  console.log(myFaves
    [favorite]);
}