// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 
// **************************************************************************

// Write a JavaScript program to convert a number to a string.

//solution 1:
const numToString = () => {
  let a = 246
  return a.toString()
}

console.log(typeof numToString())

//solution 2:
const numberToString = () => {
  let x = 123
  x = x.toString()
  console.log(typeof x)

  //send to DOM
  document.getElementById("numStr").innerHTML = typeof x;
}

// numberToString()

// ***********************************************************************

// Write a JavaScript program to convert a string to the number.
let string = '10';
let number = Number(string);

console.log(number);

//solution
const strToNumber = () => {
  let y = '0838';
  let x = parseInt(y) 
  console.log(typeof x)

//send to DOM
document.getElementById("strNum").innerHTML = typeof x;
}
// strToNumber();

// ***********************************************************************

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:

const theWorldIsRound = true;
const name = null;
let doughtnutFlavor
const integer = 4;
const notANumber = 'abd'/3
const string5 = 'sunshine'

console.log(typeof theWorldIsRound)// * Boolean
console.log(typeof name)// * Null
console.log(typeof doughtnutFlavor)// * Undefined
console.log(typeof integer)// * Number
console.log(notANumber)// * NaN
console.log(typeof string5)// * String

// ***********************************************************************

function checkDataType (data) {
  if (typeof data === 'boolean') {
    console.log(data + '  is a boolean')
    document.getElementById("checkData").innerHTML = 'boolean';
  } else if (data === null) {
    console.log(data + '  is null')
    document.getElementById("checkData").innerHTML = 'null';
  } else if (typeof data === 'undefined') {
    console.log(data + ' is undefined')
    document.getElementById("checkData").innerHTML = 'undefined';
  } else if (typeof data === 'number' && !Number.isNaN(data)) {
    console.log(data + '  is a number')
    document.getElementById("checkData").innerHTML = 'number';
  } else if (Number.isNaN(data)) {
    console.log(data + ' is a NaN')
    document.getElementById("checkData").innerHTML = 'NaN';
  } else if (typeof data === 'string') {
    console.log(data + ' is a string')
    document.getElementById("checkData").innerHTML = 'string';
  } else {
    console.log(data  + 'unrecognized')
  }
}

checkDataType(true);
checkDataType(null);
checkDataType(undefined);
checkDataType(4);
checkDataType(NaN);
checkDataType('Hello');



// Write a JavaScript program that adds 2 numbers together.

let addition = 2 + 4;
console.log(addition);

function addTwo()  {
  let a = 3;
  let b = 6;
  let sum = a + b;
  console.log(sum)
  
  //send to DOM
  document.getElementById('addition').innerHTML =  `${a} + ${b} = ${sum}`;
}
 

// ***********************************************************************

// Write a JavaScript program that runs only when 2 things are true.
const condition1 = true;
const condition2 = true;

if (condition1 && condition2 === true) {
  console.log('both conditions are true. running the program')
} else {
  console.log('not true. program run fail!')
}


// ***********************************************************************

// Write a JavaScript program that runs when 1 of 2 things are true.
const condition3 = true;
const condition4 = false;

if (condition3 || condition4) {
  console.log('program running')
} else {
  console.log('program not running')
}


// ***********************************************************************

// Write a JavaScript program that runs when both things are not true.  
const condition5 = false;
const condition6 = false;

if (!condition5 && !condition6) {
  console.log('program running')
} else {
  console.log('program stopped')
}


// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.







// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24



