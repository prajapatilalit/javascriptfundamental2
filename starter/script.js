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

// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

//object

// const lalit = {
//   firstName: "Lalit",
//   lastName: "Prajapati",
//   age: 30,
//   job: "web developer",
//   friends: ["Manish", "Shalni", "Jai Malhotra"],
// };

// console.log(lalit);
// console.log(lalit.firstName);
// console.log(lalit["lastName"]);
// const nameKey = "Name";
// console.log(lalit["first" + nameKey]);
// console.log(lalit["last" + nameKey]);

// const interestedIn = prompt(
//   "what do you want to know about lalit ? Choose between firstName, lastName, age, job, friends"
// );

// if (lalit[interestedIn]) {
//   console.log(lalit[interestedIn]);
// } else {
//   console.log(
//     "Wrong Request ! Choose between firstName, lastName, age, job, friends"
//   );
// }

// //adding property in the object by using dot and bracket notation

// lalit.location = "India";
// lalit["hobbies"] = "Playing Cricket";

// console.log(lalit);

// console.log(
//   `${lalit.firstName} has ${lalit.friends.length} friends, and his best friend is called ${lalit.friends[0]}`
// );

//object method

// const lalit = {
//   firstName: "Lalit",
//   lastName: "Prajapati",
//   birthYear: 1991,
//   job: "web developer",
//   friends: ["Manish", "Shalni", "Jai Malhotra"],
//   hasDriversLicense: true,

//   // calcAge: function (birthYear) {
//   //   return 2037 - birthYear;
//   // },

//   // calcAge: function () {
//   //   console.log(this);
//   //   return 2037 - this.birthYear;
//   // },

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.age}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a " : "no "}driver's license`;
//   },
// };

// console.log(lalit.calcAge());
// console.log(lalit.age);
// console.log(lalit.age);
// console.log(lalit.age);

// // console.log(lalit["calcAge"](1991));

// console.log(lalit.getSummary());

// //BMI calculation and comparision using object and object method

// //sangeeta kumari
// const sangeeta = {
//   fullName: "Sangeeta kumari",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// console.log(sangeeta.calcBMI());

//gautam pal
// const gautam = {
//   fullName: "Gautam pal",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// console.log(gautam.calcBMI());

// console.log(sangeeta.calcBMI(), gautam.calcBMI());

// if (sangeeta.calcBMI() > gautam.calcBMI()) {
//   console.log(
//     `${sangeeta.fullName}'s BMI (${sangeeta.BMI}) is higher than ${gautam.fullName}'s (${gautam.BMI})`
//   );
// } else {
//   console.log(
//     `${gautam.fullName}'s BMI (${gautam.BMI}) is higher than ${sangeeta.fullName}'s BMI (${sangeeta.BMI})`
//   );
// }

//looping Array

// const lalit = [
//   "Lalit",
//   "Prajapati",
//   2037 - 1991,
//   "web developer",
//   ["amit", "vivek", "manish"],
//   true,
// ];

// const types = [];
// for (let i = 0; i < lalit.length; i++) {
//   //reading lalit array
//   console.log(lalit[i], typeof lalit[i]);
//   //fill the array
//   // types[i] = typeof lalit[i];
//   types.push(typeof lalit[i]);
// }

// console.log(types);

// const years = [1991, 1989, 1996, 1999];
// const age = [];
// for (let i = 0; i < years.length; i++) {
//   age.push(2037 - years[i]);
// }
// console.log(age);

// //continue statement
// console.log("--only string--");
// for (let i = 0; i < lalit.length; i++) {
//   if (typeof lalit[i] !== "string") continue;

//   console.log(lalit[i], typeof lalit[i]);
// }

// //breaking statement
// console.log("--Breaking--");
// for (let i = 0; i < lalit.length; i++) {
//   if (typeof lalit[i] === "number") break;

//   console.log(lalit[i], typeof lalit[i]);
// }

//loop Backward

const lalit = [
  "Lalit",
  "Prajapati",
  2037 - 1991,
  "web developer",
  ["amit", "vivek", "manish"],
];

//1,2,...,4
//4,3,...,1

for (let i = lalit.length - 1; i >= 0; i--) {
  console.log(lalit[i]);
}

//coding challenge 4

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [22, 295, 176, 440, 37, 185, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    //  sum = sum+arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));
