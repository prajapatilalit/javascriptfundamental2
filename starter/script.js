// functions
// function logging() {
//   console.log("this is logging box");
// }

// logging();
// logging();
// logging();

// function foodProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// console.log(foodProcessor(4, 0));
// const appleJuice = foodProcessor(4, 0);
// const appleOrangeJuice = foodProcessor(2, 4);
// console.log(appleJuice);
// console.log(appleOrangeJuice);

//calculate age

function calcAge1(birthyear) {
  return 2037 - birthyear;
}
const age1 = calcAge1(1991);

//calculate age using function expression

const calcAge2 = function (birthyear) {
  return 2037 - birthyear;
};
const age2 = calcAge2(1992);
console.log(age1, age2);
//arrow function
const calcAge3 = (birthyear) => 2037 - birthyear;
const age3 = calcAge3(1992);

//arrow function with retirement year remaining example

const yearUntilRetirement = (birthyear, firstName) => {
  const age = 2037 - birthyear;
  const retirement = 65 - age;
  //return retirement
  return `${firstName} retire in ${retirement} years`;
};
console.log(yearUntilRetirement(1985, "Anand Raj"));
//function inside function (higher order function)

const cutFruitPieces = function (fruit) {
  return fruit * 4;
};
function foodProcessor(apples, oranges) {
  const applesPieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);
  const juice = `juice with ${applesPieces} pieces of apples and ${orangesPieces} pieces of oranges`;
  return juice;
}

console.log(foodProcessor(2, 3));
