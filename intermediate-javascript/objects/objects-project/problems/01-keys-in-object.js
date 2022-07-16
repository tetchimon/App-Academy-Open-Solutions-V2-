/***********************************************************************
Write a function called `keysInObject(obj)` that takes in an object and returns
an array of all the keys within that Object.

Do this once using using a `for...in` loop and once using `Object.keys`.

Examples:


let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
keysInObject(animals); // => ["dog", "cat", "bison"]
keysInObject(foods); // => ["apple", "lemon", "mango"]
***********************************************************************/

let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}


// function keysInObject(obj) {

//   let newArr = [];
//   for(let key in obj){
//     newArr.push(key);
//   }
//   return newArr;

// }


function keysInObject(obj) {
  let arr = Object.keys(obj);
  return arr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keysInObject;
