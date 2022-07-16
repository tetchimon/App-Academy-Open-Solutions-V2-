/***********************************************************************
Write a function arrowReverseString(str) that accepts a string and returns that string
reversed.

Write this function using a fat arrow function!

Examples:
let result1 = arrowReverseString("hello"); // returns "olleh"
let result2 = arrowReverseString("garden"); // returns "nedrag"
let result3 = arrowReverseString("potato"); // returns "otatop"


***********************************************************************/

const arrowReverseString = str => {
  let reversedStr = [];
  for(let i = str.length; i >= 0; i--){
    reversedStr.push(str[i]);
  };
  return reversedStr.join('');
};

// your code here!
//Examples:
let result1 = arrowReverseString("hello"); // returns "olleh"
let result2 = arrowReverseString("garden"); // returns "nedrag"
let result3 = arrowReverseString("potato"); // returns "otatop"
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/

try {
  module.exports = arrowReverseString;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
