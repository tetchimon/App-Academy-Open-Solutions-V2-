//Add To Array Research
function addToArray(location, element, arr) {

    if(location === "FRONT"){
        arr.unshift(element);
    }
    else if(location === "BACK"){
       arr.push(element);
    }
    else{
        return console.log("Error. Enter FRONT or BACK");
    }
}

testArray = [1,2,3]

addToArray("FRONT", 0, testArray)
console.log(testArray) // [0,1,2,3]

addToArray("BACK", 4, testArray)
console.log(testArray) // [0,1,2,3,4]

addToArray("MIDDLE", 4, testArray) // "ERROR"
console.log(testArray) // [0,1,2,3,4]


//Range
let range = function(min, max){

    let newArr = [];
    for(let i = min; i <= max; i++){
        newArr.push(i);
    }
    return newArr;
}



console.log(range(3, 10)); // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(range(217, 220)); // [ 217, 218, 219, 220 ]
console.log(range(-5, 1)); // [ -5, -4, -3, -2, -1, 0, 1 ]
console.log(range(10, 3)); // []

//Even Numbers
let evenNumbers = function(max){

    let newArr = [];
    for(let i = 1; i < max; i++){
        if(i % 2 === 0){
            newArr.push(i);
        }
    }
    return newArr;
}



console.log(evenNumbers(7)); // [ 2, 4, 6 ]
console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]

//Log Between Stepper Recall
let logBetweenStepper = function(min, max, step){

    for(let i = min; i <= max; i+= step){
        console.log(i);
    }
}

// Examples:
logBetweenStepper(5, 9, 1); // prints out:
5
6
7
8
9


logBetweenStepper(-10, 15, 5)  // prints out:
-10
-5
0
5
10
15

//Factors Of
let factorsOf = function(num) {

    let arr = [];

    for(let i = 0; i <= num; i++){
        if(num % i === 0){
            arr.push(i);
        }
    }
    return arr;
}



console.log(factorsOf(5)); // [ 1, 5 ]
console.log(factorsOf(8)); // [ 1, 2, 4, 8 ]
console.log(factorsOf(9)); // [ 1, 3, 9 ]
console.log(factorsOf(10)); // [ 1, 2, 5, 10 ]
console.log(factorsOf(24)); // [ 1, 2, 3, 4, 6, 8, 12, 24 ]
console.log(factorsOf(2017)); // [ 1, 2017 ]

//Fizz Buzz Array
let fizzBuzz = function(max){

    let arr = [];

    for(let i = 0; i < max; i++){
        if(i % 3 === 0 && i % 5 !== 0){
            arr.push(i);
        }
        else if(i % 3 !== 0 && i % 5 === 0){
            arr.push(i);
        }
    }
    return arr;
}



console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]


//Pit Pat
let pitPat = function(max){

    let arr = [];

    for(let i = 0; i <= max; i++){
        if(i % 4 === 0 && i % 6 !== 0){
            arr.push(i);
        }
        else if(i % 4 !== 0 && i % 6 === 0){
            arr.push(i);
        }
    }
    return arr;
}







console.log(pitPat(18)); // [ 4, 6, 8, 16, 18 ]
console.log(pitPat(30)); // [ 4, 6, 8, 16, 18, 20, 28, 30 ]


//Double Sequence
let doubleSequence = function(base, length){

    let arr = [];
    let element = base;

    for(let i = 0; i < length; i++){

        arr.push(element);
        element += element;
    }

    return arr;
}



console.log(doubleSequence(7, 3));  // [7, 14, 28]
console.log(doubleSequence(3, 5));  // [3, 6, 12, 24, 48]
console.log(doubleSequence(5, 3));  // [5, 10, 20]
console.log(doubleSequence(5, 4));  // [5, 10, 20, 40]
console.log(doubleSequence(5, 0));  // [ ]

//Triple Sequence
function tripleSequence(start, length) {

    let arr = [];
    let element = start;

    for(let i = 0; i < length; i++){

        arr.push(element);
        element = element*3;

    }

    return arr;
}

console.log(tripleSequence(2, 4)); // [2, 6, 18, 54]
console.log(tripleSequence(4, 5)); // [4, 12, 36, 108, 324]

//Unique
let unique = function(arr){

    let newArr = [];

    for(let i = 0; i < arr.length; i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i]);
        }
    }

    return newArr;
}



console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']

//Yeller
let yeller = function(words){

    let newArr = [];

    for(let i = 0; i < words.length; i++){
        let word = words[i];
        newArr.push(word.toUpperCase() + "!");
    }

    return newArr;
}




console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]

//Tripler
let tripler = function(nums){

    let newNums = [];

    for(let i = 0; i < nums.length; i++){
        let  num = nums[i];

        num = num*3;
        newNums.push(num);
    }
    return newNums;
}






console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]


//Long Words
let longWords = function(words){

    let newWords = [];

    for(let i = 0; i < words.length; i++){
        let word = words[i];

        if(word.length > 5){
            newWords.push(word);
        }
    }

    return newWords;
}






console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]

//Choosey Endings
let chooseyEndings = function(arr, str){

    let newArr = [];

    for(let i = 0; i < arr.length; i++){
        let word = arr[i];
        if(word.endsWith(str)){
            newArr.push(word);
        }
    }

    return newArr;
}


console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'ly'));
// [ 'family', 'fly', 'timidly' ]

console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'nd'));
// [ 'hound', 'bond' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'icity'));
// [ 'simplicity', 'felicity' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'ily'));
// [ ]

console.log(chooseyEndings(17, 'ily'));
// [ ]


//Common Factors
let commonFactors = function(num1, num2){

    let newArr = [];

    let length;
    if (num1 > num2) length = num1;
    else length = num2;

    for(let i = 0; i < length; i++){
        let number = length[i];
        if(num1 % i === 0 && num2 % i === 0){
            newArr.push(i);
        }
    }

    return newArr;
}


console.log(commonFactors(50, 30));            // [1, 2, 5, 10]
console.log(commonFactors(8, 4));              // [1, 2, 4]
console.log(commonFactors(4, 8));              // [1, 2, 4]
console.log(commonFactors(12, 24));            // [1, 2, 3, 4, 6, 12]
console.log(commonFactors(22, 44));            // [1, 2, 11, 22]
console.log(commonFactors(7, 9));              // [1]


//Adjacent Sums
let adjacentSums = function(arr){

    let newArr = [];

    for(let i = 0; i < arr.length - 1; i++){
        let num = arr[i];

        newArr.push(num + arr[i+1]);
    }

    return newArr;
}


console.log(adjacentSums([3, 8, 7, 1]));        // [ 11, 15, 8 ]
console.log(adjacentSums([10, 5, 4, 3, 9]));    // [ 15, 9, 7, 12 ]
console.log(adjacentSums([2, -3, 3]));          // [-1, 0]

//Fibonacci Sequence
let fibonacciSequence = function(n){

    if(n === 0) return [];
    else if(n === 1) return [1];

    let fib = [1, 1];
    for(let i = 2; i < n; i++){
        let last = fib[fib.length - 1];
        let secondLast = fib[fib.length - 2];
        let next = last + secondLast;
        fib.push(next);
    }

    return fib;
}



console.log(fibonacciSequence(4));  // [ 1, 1, 2, 3 ]
console.log(fibonacciSequence(5));  // [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence(8));  // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
console.log(fibonacciSequence(0));  // [ ]
console.log(fibonacciSequence(1));  // [ 1 ]
console.log(fibonacciSequence(2));  // [ 1, 1 ]

//Pick Primes
function pickPrimes(array) {

    let newArr = [];

    for(let i = 0; i < array.length; i++){
        let num = array[i];
        if(isPrime(num)){
            newArr.push(num);
        }
    }

    return newArr;
}

function isPrime(n){

    if(n < 2) return false;

    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

console.log(pickPrimes([2, 3, 4, 5, 6]));  // [2, 3, 5]
console.log(pickPrimes([101, 20, 103, 2017]));  // [101, 103, 2017]


//Greatest Factor Array
function greatestFactorArray(array) {
    let newArr = [];

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            newArr.push(factor(array[i]));
        }
        else{
            newArr.push(array[i]);
        }
    }

    return newArr;
}

let factor = function(n){

    for(let i = n; i > 0; i--){
        if(n % i === 0){
            return i;
        }
    }
}


console.log(greatestFactorArray([16, 7, 9, 14])); // [8, 7, 9, 7]
console.log(greatestFactorArray([30, 3, 24, 21, 10])); // [15, 3, 12, 21, 5]

//Summation Sequence
function summationSequence(start, length) {

    let seq = [start];

    for(let i = seq.length; i < length; i++){

        seq.push(summation(seq[seq.length - 1]));
    }

    return seq;
}

let summation = function(n){
    let sum = 0;
    for(let i = 0; i <= n; i++){
        sum += i;
    }
    return sum;
}

console.log(summationSequence(3, 4)); // [3, 6, 21, 231]
console.log(summationSequence(5, 3)); // [5, 15, 120]
