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

// function calcAge1(birthyear) {
//   return 2037 - birthyear;
// }
// const age1 = calcAge1(1991);

// //calculate age using function expression

// const calcAge2 = function (birthyear) {
//   return 2037 - birthyear;
// };
// const age2 = calcAge2(1992);
// console.log(age1, age2);
// //arrow function
// const calcAge3 = (birthyear) => 2037 - birthyear;
// const age3 = calcAge3(1992);

// //arrow function with retirement year remaining example

// const yearUntilRetirement = (birthyear, firstName) => {
//   const age = 2037 - birthyear;
//   const retirement = 65 - age;
//   //return retirement
//   return `${firstName} retire in ${retirement} years`;
// };
// console.log(yearUntilRetirement(1985, "Anand Raj"));
// console.log(yearUntilRetirement(1975, "Hanshika"));

// //function inside function (higher order function)

// const cutFruitPieces = function (fruit) {
//   return fruit * 4;
// };
// function foodProcessor(apples, oranges) {
//   const applesPieces = cutFruitPieces(apples);
//   const orangesPieces = cutFruitPieces(oranges);
//   const juice = `juice with ${applesPieces} pieces of apples and ${orangesPieces} pieces of oranges`;
//   return juice;
// }

// console.log(foodProcessor(2, 3));

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

const calcAverage = (a, b, c) => (a + b + c) / 3;

// data 1 dolphin=(44, 23, 71) and koalas (65, 54, 49)
let avgDolphinScore = calcAverage(44, 23, 71);
let avgKoalasScore = calcAverage(65, 54, 49);

console.log(
  "avgDolphinScore:",
  avgDolphinScore,
  "avgKoalasScore:",
  avgKoalasScore
);

const checkWinner = (avgDolphin, avgKoalas) => {
  if (avgDolphin >= 2 * avgKoalas) {
    console.log(`Dolphin Win 🏆(${avgDolphin} Vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphin) {
    console.log(`Koalas Win 🏆(${avgKoalas} Vs. ${avgDolphin})`);
  } else {
    console.log("No Team Win");
  }
};

checkWinner(avgDolphinScore, avgKoalasScore);

//data 2 dolphin=(85, 54, 41) and koalas (23, 34, 27)
avgDolphinScore = calcAverage(85, 54, 41);
avgKoalasScore = calcAverage(23, 34, 27);

checkWinner(avgDolphinScore, avgKoalasScore);
