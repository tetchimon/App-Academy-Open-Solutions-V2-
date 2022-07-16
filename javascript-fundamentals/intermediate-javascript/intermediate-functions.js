//Is Prime Recall
let isPrime = function(number){

    //check if less than 2
    if(number < 2){
        return false;
    }

    //iterate through numbers and check if divisible
    for(let i = 2; i < number; i++){
        //let check = number[i];
        if(number %  i === 0){
            return false;
        }

    }
    return true;

};

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true


//Choose Primes
let isPrime = function(num) {
    if (num < 2) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

let choosePrimes = function(nums) {
    let primes = [];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (isPrime(num)) {
            primes.push(num);
        }
    }

    return primes;
}




console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]

//Next Prime
let nextPrime = function(num){

    let i = num;
    while(true){
        i++;

        if(isPrime(i)){
            return i;
        }
    }

};

let isPrime = function(n){
    if(n < 2){
        return false;
    }
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(12));


console.log(nextPrime(2)); // 3
console.log(nextPrime(3)); // 5
console.log(nextPrime(7)); // 11
console.log(nextPrime(8)); // 11
console.log(nextPrime(20)); // 23
console.log(nextPrime(97)); // 101

//Prime Factors
let primeFactors = function(num){

    let arr = [];

    for(let i = 0; i <= num; i++){
        if(num % i === 0 && isPrime(i)){
            arr.push(i);
        }
    }
    return arr;
};

let isPrime = function(n){

    if(n < 2){
        return false;
    }

    for(let i = 2; i < n; i++){
        if(n % i === 0){
           return false;
        }
    }
    return true;
}

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(12));


console.log(primeFactors(12));  // [2, 3]
console.log(primeFactors(7));   // [7]
console.log(primeFactors(16));  // [2]
console.log(primeFactors(30));  // [2, 3, 5]
console.log(primeFactors(35));  // [5, 7]
console.log(primeFactors(49));  // [7]
console.log(primeFactors(128)); // [2]

//Is Anti Prime
let isAntiPrime = function(num){

    let factorsOfNum = numFactors(num);

    for(let i = 1; i < num; i++){
        if(factorsOfNum <= numFactors(i)){
            return false;
        }
    }
    return true;
};

let numFactors = function(n){

    let count = 0;
        for(let i = 1; i < n; i++){
            if(n % i === 0){
                count++;
            }
        }
        return count;
};

console.log(numFactors(24));
console.log(numFactors(3));

console.log(isAntiPrime(24))   // true
console.log(isAntiPrime(36))   // true
console.log(isAntiPrime(48))   // true
console.log(isAntiPrime(360))  // true
console.log(isAntiPrime(1260)) // true
console.log(isAntiPrime(27))   // false
console.log(isAntiPrime(5))    // false
console.log(isAntiPrime(100))  // false
console.log(isAntiPrime(136))  // false
console.log(isAntiPrime(1024)) // false

//Most Vowels
function mostVowels(sentence) {

    let words = sentence.split(' ');
    let longestWord = 0;
    let longestWordIs;

    for(let i = 0; i < words.length; i++){    //iterate through each word

       let word = words[i];
       if(countVowels(word) > longestWord){
        longestWord = countVowels(word);
        longestWordIs = word;
       }
    }
    return longestWordIs;
}

let countVowels = function(word){

    let vowels = 'aeiou';
    let count = 0;

    for(let i = 0; i < word.length; i++){
        if(vowels.includes(word[i])){
            count++;
        }
    }
    return count;
}


console.log(countVowels('asdeefgh'));
console.log(countVowels('test'));

console.log(mostVowels("what a wonderful life")); // "wonderful"


//All Else Equal
function allElseEqual(arr) {

    let halfSum = sumArray(arr)/2;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === halfSum){
            return arr[i];
        }
    }
    return null;
}

let sumArray = function(arr){

    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}



console.log(allElseEqual([2, 4, 3, 10, 1])); // 10
console.log(allElseEqual([6, 3, 5, -9, 1])); // 3
console.log(allElseEqual([1, 2, 3, 4]));     // null
