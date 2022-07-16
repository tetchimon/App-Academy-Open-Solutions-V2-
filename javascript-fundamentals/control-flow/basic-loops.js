//Log Between
function logBetween(lowNum, highNum){
    for(i=lowNum; i <= highNum; i++){
        console.log(i);
    }
}


// Examples:
logBetween(-1, 2); // prints out:
-1
0
1
2

logBetween(14, 6); // => prints nothing

logBetween(4, 6); // prints out:
4
5
6

//Print Fives

function printFives(max){
    for(i = 0; i < max; i++){
        if(i%5 === 0){
            console.log(i);
        }
    }
}

printFives(20) // prints out:
0
5
10
15

//Log Between Stepper
function logBetweenStepper(min, max, step){
    for(i = min; i <= max; i += step){
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

//Fizz Buzz
function fizzBuzz(max){
    for(i = 0; i < max; i++){
        if(i%3 === 0 || i%5 === 0){
            console.log(i);
        }
    }
}

fizzBuzz(20); // prints out:
3
5
6
9
10
12
18

//Dynamic Fizz Buzz
function dynamicFizzBuzz(max, num1, num2){
    let arr = [];
    for(i = 0; i < max; i++){
        if(i%num1 === 0 || i%num2 === 0)
        {
            if(i > 0){
                arr.push(i);
            }
        }
    }
    return arr;
}



console.log(dynamicFizzBuzz(20, 3, 5)); // [ 3, 5, 6, 9, 10, 12, 18 ]
console.log(dynamicFizzBuzz(24, 4, 6)); // [ 4, 6, 8, 16, 18, 20 ]

//Least Common Multiple
let leastCommonMultiple = function(num1, num2) {
    for (let i = 1; i <= (num1 * num2); i++) {
        if (i % num1 === 0 && i % num2 === 0) {
            return i;
        }
    }
}


console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10

//Is Prime
function isPrime(number){
    let arr = [];
    for(i = 0; i<= number; i++){
        if(number%i === 0){
            arr.push(i);
        }
    }
    if (arr.length === 2) return true;
    else return false;
}

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true

//Is Perfect Square
function isPerfectSquare(number){
    let sq = Math.sqrt(number);
    if(sq*sq === number) return true;
    else return false;
}



console.log(isPerfectSquare(1))     // true
console.log(isPerfectSquare(4))     // true
console.log(isPerfectSquare(64))    // true
console.log(isPerfectSquare(100))   // true
console.log(isPerfectSquare(169))   // true
console.log(isPerfectSquare(2))     // false
console.log(isPerfectSquare(40))    // false
console.log(isPerfectSquare(32))    // false
console.log(isPerfectSquare(50))    // false

//Fibonacci
function fibonacci(length) {
    let fib = [];
    for(i = 0; i < length; i++){
        if(i === 0){
            fib.push(1);
        }
        else if(i === 1){
            fib.push(1);
        }
        else{
            fib.push((fib[i-1] + fib[i-2]));
        }

    }
    return fib;
}

console.log(fibonacci(0)); // []
console.log(fibonacci(1)); // [1]
console.log(fibonacci(6)); // [1, 1, 2, 3, 5, 8]
console.log(fibonacci(8)); // [1, 1, 2, 3, 5, 8, 13, 21]
