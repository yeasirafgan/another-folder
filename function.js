// function addThreeNumbers(a, b, c) {
//   const d = a + b + c;
//   return d;
// }

// const x = 1;
// const y = 8;
// const z = 9;
// const mySum = addThreeNumbers(x, y, z);
// console.log(mySum);

// function addFourNumbers(num1, num2, num3, num4) {
//   const total = num1 + num2 + num3 + num4;
//   return total;
// }
// console.log(addFourNumbers(1, 34, 56, 32));

// const juiceFactory = function (apples, oranges) {
//   const juice = (apples * oranges) / 2;
//   return `${juice} Juice is ready using ${apples} apples and ${oranges} oranges 🧑🏽‍🎤 `;
// };
// console.log(juiceFactory(10, 5));

// const pizzaMaker = function (dow, cheese, chicken) {
//   const pizza = dow + cheese / chicken;
//   return `${pizza} Pizza is ready for everyone 🍕`;
// };
// console.log(pizzaMaker(1.5, 0.2, 0.5));

// const pizzaMaker2 = (dow, cheese, chicken) => {
//   const pizza = dow + cheese / chicken;
//   return `${pizza} Pizza is ready for everyone 🍕`;
// };
// console.log(pizzaMaker2(1.5, 0.2, 0.5));

// const ageCalculator = (birthYear) =>
//   2023 - birthYear >= 18 ? 'Your are adult' : 'You are underage';
// console.log(ageCalculator(1980));

// const heroMaker = (age, skill) => {
//   if (age >= 18 || skill) {
//     return 'You can be a SuperHero';
//   } else {
//     return 'You are not a hero';
//   }
// };
// console.log(heroMaker(21, false));

// const hPro = (age, skill) => (age >= 18 ? 'you are adult' : 'you are underage');
// console.log(hPro(34, true));

// function ageCalculator(birthYear) {
//   const age = 2023 - birthYear;
//   return age;
// }
// const myBirthYear = 1980;
// console.log(ageCalculator(myBirthYear));

// const evenNumberFinder = function (number) {
//   if (number % 2 === 0) {
//     return `${number} is  an Even Number`;
//   } else {
//     return `${number} is an Odd Number`;
//   }
// };
// console.log(evenNumberFinder(27));

// const doMath = (a, b, c) => {
//   const x = a + b;
//   const y = x * c;
//   return y;
// };
// console.log(doMath(13, 21, 78));

// const doMathPro = (x, y) => {
//   return x * y;
// };
// console.log(doMathPro(11, 22));

// const doMathUltra = (x, y) => x * y;
// console.log(doMathUltra(10, 20));

// function fruitCutter(fruit) {
//   return fruit * 4;
// }
// function juiceMaker(apples, oranges) {
//   const applePieces = fruitCutter(apples);
//   const orangePieces = fruitCutter(oranges);
//   const juices = applePieces + orangePieces / 2;
//   return `${juices} ltr. juice is ready using ${applePieces} apple pieces and ${orangePieces} orange pieces 🌈`;
// }
// console.log(juiceMaker(15, 10));

// function foodCutter(food) {
//   return food * 8;
// }

// function sandwichCutter(sandwiches) {
//   return sandwiches * 4;
// }
// function nickis_sandwiches(
//   bread,
//   margarin,
//   cheese,
//   tuna,
//   cornbeef,
//   peanutbutter
// ) {
//   const breadPieces = sandwichCutter(bread);
//   const margarinAmount = sandwichCutter(margarin);
//   const cheesePieces = sandwichCutter(cheese);
//   const tunaAmount = sandwichCutter(tuna);
//   const cornbeefTin = sandwichCutter(cornbeef);
//   const peanutbutterJar = sandwichCutter(peanutbutter);
//   const sandwich =
//     (breadPieces + margarinAmount) /
//     (cheesePieces + tunaAmount + cornbeefTin + peanutbutterJar);
//   return `${sandwich} sandwiches ready for residents using ${margarinAmount} gram butter and ${cheesePieces} gram cheese and ${tunaAmount} tin tuna and ${cornbeefTin} tin cornbeef and ${peanutbutterJar} gram peanut butter.....ENJOY 🥪`;
// }
// console.log(nickis_sandwiches(35, 300, 200, 2, 1, 250));
// function momee(name) {
//   console.log('momee function working first');
//   gomee(name);
// }
// function gomee(name) {
//   console.log('gomee function working second');
//   pomee(name);
// }
// function pomee(name) {
//   console.log('pomee function wokring third');
//   nomee(name);
// }
// function nomee(name) {
//   console.log('nomee function working fourth');
//   romee(name);
// }
// function romee(name) {
//   console.log(`romee function working fifth and name is ${name}`);
// }
// function komee(name) {
//   const mem = prompt('What is your name? 🤰🏻');
//   momee(mem);
// }
// komee();
//------------------------

// function technicalTest(ramFreq, cpuClock) {
//   const dramstate = ramFreqTest(ramFreq);
//   const cpuState = cupTurbo(cpuClock);
//   return `${dramstate} and ${cpuState}`;
// }
// console.log(technicalTest(3200, 3.9));

// function ramFreqTest(ramFreq) {
//   return ramFreq >= 2660 ? 'DDR4' : 'DDR3';
// }
// function cupTurbo(cpuClock) {
//   return cpuClock >= 3.1 ? '1800rpm' : '1400rpm';
// }

//-----------------
// function brickCalculator(totalFloors) {
//   const undergroundBricks = 50000;
//   let bricksForAllFloors = totalFloors * 10000;
//   const extraFloors = totalFloors / 11;
//   const extraBrick = extraFloors * 2000;
//   bricksForAllFloors += extraBrick;
//   return `Total bricks needed ${undergroundBricks + bricksForAllFloors}`;
// }
// console.log(brickCalculator(73));
//-----------------
