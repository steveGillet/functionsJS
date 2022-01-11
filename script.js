'use strict';

// // Coding Challenge #2

// (function () {
//   const header = document.querySelector(`h1`);
//   header.style.color = `red`;
//   document.querySelector(`body`).addEventListener(`click`, function () {
//     header.style.color = `blue`;
//   });
// })();

// // Closure Examples

// let a;

// const b = function () {
//   const c = 44;
//   a = function () {
//     console.log(c / 3);
//   };
// };

// const d = function () {
//   const e = 980;
//   a = function () {
//     console.log(e * 8);
//   };
// };

// // a is reassign by b
// b();
// a();

// console.dir(a);

// // a is reassign by d
// d();
// a();

// console.dir(a);

// // another example

// const cookHam = function (weight, cookTime) {
//   const perHam = weight / 2;
//   setTimeout(function () {
//     console.log(`${weight} pounds of ham is cooked.`);
//     console.log(`There are 2 hams, each with ${perHam} pounds`);
//   }, cookTime * 1000);
//   console.log(`Cooking started, cooking will be done in ${cookTime} minutes.`);
// };

// cookHam(20, 10);

// // Closures

// // closures are not explicitly used, not manual
// const secureCooking = function () {
//   let cookCount = 0;

//   return function () {
//     cookCount++;
//     console.log(cookCount);
//   };
// };

// const cooker = secureCooking();
// // cooker still has access to cookCount despite secureCooking being gone
// cooker();
// cooker();
// cooker();
// // closure allows booker to remember variables from secureCooking

// console.dir(cooker);

// // Immediately Invoked Function Expressions

// const oneTime = function () {
//   console.log(`Do it one time.`);
// };
// oneTime();

// // IIFE
// (function () {
//   console.log(`Only one time.`);
//   // private/encapsulated
//   const nonGlobal = 69;
// })();

// // // don't have access to this variable
// // console.log(nonGlobal);

// // IIFE Arrow
// (() => console.log(`Also only one time.`))();

// {
//   const isPrivate = 99;
//   var nonPrivate = 101;
// }

// //console.log(isPrivate);
// console.log(nonPrivate);

// // Coding Challenge #1

// const poll = {
//   question: `What's your favorite coding language?`,
//   options: [`0: JavaScript`, `1: Python`, `2: Rust`, `3: C++`],

//   answers: new Array(4).fill(0),
// };

// poll.registerNewAnswer = function () {
//   const answer = prompt(
//     `${this.question}\n${this.options.join(`\n`)}\n(Write option number)`
//   );
//   typeof answer === `number` &&
//     answer < this.answers.length &&
//     this.answers[answer]++;
//   this.displayResults(
//     prompt(`Would you like the answers as a string or an array?`)
//   );
// };

// document
//   .querySelector(`.poll`)
//   .addEventListener(`click`, poll.registerNewAnswer.bind(poll));

// poll.displayResults = function (type = `array`) {
//   type === `array`
//     ? console.log(this.answers)
//     : console.log(`Poll results are ${this.answers.join(`, `)}.`);
// };

// const bonus = {
//   answers: [],
//   registerNewAnswer: poll.registerNewAnswer,
//   displayResults: poll.displayResults,
// };

// bonus.answers = [5, 2, 3];
// bonus.displayResults(`string`);
// bonus.displayResults(`array`);

// bonus.answers = [1, 5, 3, 9, 6, 1];
// bonus.displayResults(`string`);
// bonus.displayResults(`array`);

// // call for different this keyword
// poll.displayResults.call({ answers: [5, 2, 3] }, `array`);

// // Call and Apply Methods

// const airFrance = {
//   airline: `Air France`,
//   icaoCode: `AFR`,
//   bookings: [],
//   //book: function(){},
//   book(flightNumber, name) {
//     console.log(
//       `${name}, got a spot on ${this.airline} flight ${this.icaoCode}${flightNumber}.`
//     );
//     this.bookings.push({ flight: `${this.icaoCode}${flightNumber}`, name });
//   },
// };

// airFrance.book(2153, `Smithy Smithers`);
// airFrance.book(3, `John Legend`);

// const southWest = {
//   airline: `Southwest Airlines`,
//   icaoCode: `SWA`,
//   bookings: [],
// };

// // this keyword is undefined when reapplied to new function instead of method
// const book = airFrance.book;

// // can't call like this with `this` keyword
// // book(23, `Fanny Mac`);

// // call method

// book.call(southWest, 412, `Shmicael Shmidt`);
// console.log(southWest);

// book.call(airFrance, 512, `Collin Kappy`);
// console.log(airFrance);

// const american = {
//   airline: `American Airlines`,
//   icaoCode: `AAL`,
//   bookings: [],
// };

// book.call(american, 312, `Tom Gunn`);
// console.log(american);

// //  apply method
// // same but with array
// const flightData = [432, `Jinny Gin`];
// book.apply(american, flightData);

// // don't need with spread
// book.call(southWest, ...flightData);

// // Bind Method

// const bookSW = book.bind(southWest);
// const bookAA = book.bind(american);
// const bookAF = book.bind(airFrance);
// bookSW(111, `Elephant Stephens`);

// // partial application, part of original function already set
// const bookAA112 = book.bind(american, 112);
// bookAA112(`Slithery Steve`);
// bookAA112(`Rolling Samsonite`);

// // with event listeners

// airFrance.numPlanes = 350;
// airFrance.buyPlane = function () {
//   console.log(this);
//   this.numPlanes++;
//   console.log(this.numPlanes);
// };
// // `this` keyword is set to buy button
// // in event handler `this` points to element on which handler is attached to
// // document.querySelector(`.buy`).addEventListener(`click`, airFrance.buyPlane);
// // need to manually define `this` using bind or call
// document
//   .querySelector(`.buy`)
//   .addEventListener(`click`, airFrance.buyPlane.bind(airFrance));

// // partial application

// const addTax = (taxRate, value) => value + value * taxRate;
// console.log(addTax(0.1, 200));

// const addStanTax = addTax.bind(null, 0.08);
// //addStanTax = value => value + value * 0.08;

// console.log(addStanTax(121));

// const addTaxFR = function (rate) {
//   return function (price) {
//     return price + price * rate;
//   };
// };

// const stanTaxFR = addTaxFR(0.08);
// console.log(stanTaxFR(250));

// Functions returning functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const arrowGreet = greeting => name => console.log(`${greeting} ${name}`);

// const heyGreet = greet(`What's up`);
// heyGreet(`Buddy`);
// heyGreet(`Billy Bob`);

// greet(`Willkommen`)(`Heinrich`);

// arrowGreet(`smash`)(`mouth`);

// const removeSpaces = function (stringIn) {
//   return stringIn.replaceAll(` `, ``).toLowerCase();
// };

// const upperFirst = function (stringIn) {
//   const [firstWord, ...otherWords] = stringIn.split(` `);
//   return [firstWord.toUpperCase(), ...otherWords].join(` `);
// };

// // higher order function
// const transformer = function (stringIn, functionIn) {
//   console.log(`Sad Robot Noises. ${stringIn}`);
//   console.log(`Transformers! ${functionIn(stringIn)}`);

//   console.log(`Transformed by: ${functionIn.name}`);
// };

// transformer(`You da, you da best`, upperFirst);

// transformer(`Sammy the wise Gamgy`, removeSpaces);

// const fistBump = function () {
//   console.log(`👊`);
// };
// document.body.addEventListener(`click`, fistBump);

// [`Sam`, `Jerry`, `Big Smelly`].forEach(fistBump);

// // build your own

// const backslashFormat = function (username) {
//   return `ttu\\${username}`.toLowerCase();
// };

// const atFormat = function (username) {
//   return `${username}@ttu.edu`.toLowerCase();
// };

// const formatUsername = function (username, formatFunction) {
//   console.log(`Formatted Username: ${formatFunction(username)}`);
// };

// formatUsername(`steveG`, backslashFormat);
// formatUsername(`luckyluke`, atFormat);

// // How Passing Arguments Works

// // primitives vs reference types

// const flight = `HJ234`;
// const passenger1 = {
//   name: `G Money`,
//   passportNumber: `35231532`,
// };

// const checkInFunction = function (flightNumber, passenger) {
//   flightNumber = `HJ414`;
//   passenger.name = `Mr. ` + passenger.name;
//   4;
//   if (passenger.passportNumber === `35231532`) alert(`Check In`);
//   else alert(`Kick Out`);
// };

// // flight is primitive so what is passed into function is a copy and flight is not changed
// // flightNumber = flight basically
// // passenger1 is a reference type so it passes the memory location
// // passenger = passenger1
// // same object in memory heap
// checkInFunction(flight, passenger1);
// console.log(flight);
// console.log(passenger1);

// const changePassport = function (passenger) {
//   passenger.passportNumber = Math.round(Math.random() * 1000000000);
// };

// changePassport(passenger1);
// checkInFunction(flight, passenger1);
// console.log(passenger1);

// // pass by value and pass by reference
// // javascript does not pass by value
// // objects pass value of reference

// // Default Parameters

// const bookingArray = [];

// const makeBooking = function (
//   flightNumber,
//   numberPassengers = 1,
//   price = 199 * numberPassengers
// ) {
//   // numberPassengers = numberPassengers || 1;
//   // price = price || 199;
//   const booking = {
//     flightNumber,
//     numberPassengers,
//     price,
//   };
//   console.log(booking);
//   bookingArray.push(booking);
// };

// makeBooking(`Num1`);
// makeBooking(`LH121`, 2, 749.99);
// makeBooking(`LA213`, 4);
// makeBooking(`HH231`, undefined, 1000);
