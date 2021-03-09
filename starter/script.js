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

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// // data 1 dolphin=(44, 23, 71) and koalas (65, 54, 49)
// let avgDolphinScore = calcAverage(44, 23, 71);
// let avgKoalasScore = calcAverage(65, 54, 49);

// console.log(
//   "avgDolphinScore:",
//   avgDolphinScore,
//   "avgKoalasScore:",
//   avgKoalasScore
// );

// const checkWinner = (avgDolphin, avgKoalas) => {
//   if (avgDolphin >= 2 * avgKoalas) {
//     console.log(`Dolphin Win 🏆(${avgDolphin} Vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphin) {
//     console.log(`Koalas Win 🏆(${avgKoalas} Vs. ${avgDolphin})`);
//   } else {
//     console.log("No Team Win");
//   }
// };

// checkWinner(avgDolphinScore, avgKoalasScore);

// //data 2 dolphin=(85, 54, 41) and koalas (23, 34, 27)
// avgDolphinScore = calcAverage(85, 54, 41);
// avgKoalasScore = calcAverage(23, 34, 27);

// checkWinner(avgDolphinScore, avgKoalasScore);

// Coding Challenge #2

/*
Ramesh is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀*/

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
