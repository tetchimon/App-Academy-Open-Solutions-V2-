//Echo Recall
function echo(string) {
    return console.log(string.toUpperCase() + " ... " + string + " ... " + string.toLowerCase());
  }

  echo("Mom!"); // => prints "MOM! ... Mom! ... mom!"
  echo("hey"); // => prints "HEY ... hey ... hey"
  echo("JUMp"); // => prints "JUMP ... JUMp ... jump"

  //Vowel Counter Recall
  function countVowels(word) {

    let vowels = 'aeiou';
    let count = 0;

    for(let i = 0; i < word.length; i++){
        let char = word[i];
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
};

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2

//Sum Array Recall
function sumArray(array) {
    let sum = 0;

    for(let i = 0; i < array.length; i++){
        let num = array[i];
        sum += num;
    }
    return sum;
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30

//Pig Latin Recall
// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

let pigLatinWord = function(word){

    let vowels = 'aeiou';
    let firstChar = word[0];
    newWord = '';

    if(vowels.includes(firstChar)){
        return word + 'yay';
    }

    else{
        for(let i = 0; i < word.length; i++){
            let vowel = word[i];
            if(vowels.includes(vowel)){
                newWord = word.slice(i) + word.slice(0, i) + 'ay';
            }
        }
    }
    return newWord;
}



console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"

//My Index Of Recall
let myIndexOf = function(arr, target){

    for(let i = 0; i < arr.length; i++){
        let char = arr[i];
        if(char === target){
            return i
        }
    }
    return -1;
}






console.log(myIndexOf(['a', 'b', 'c', 'e'], 'c')); // 2
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'e')); // 3
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'z')); // -1
console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
console.log(myIndexOf([43, -7, 11, 13], 1)); // -1

//Two Sum Recall
let twoSum = function(arr, target){

    for(let i = 0; i < arr.length; i++){
      let num1 = arr[i];

      for(let j = i+1; j < arr.length; j++){
          let num2 = arr[j];

          if(num1 + num2 === target){
              return true;
          }
      }
    }
    return false;
}






console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
console.log(twoSum([4, 6, 2, 3], 8)); // true
console.log(twoSum([4, 6, 2, 3], 11)); // false

//Fizz Buzz Recall
let fizzBuzz = function(max){
    let numbers = [];

    for(let i = 0; i < max; i++){
        if((i%3 === 0 || i%5 === 0) && !(i%3 === 0 && i%5 === 0)){
            numbers.push(i);
        }
    }
    return numbers;
}







console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]

//Remove Last Vowel Recall
let removeLastVowel = function(word){

    let vowels = 'aeiou';
    let newWord = '';

    for(let i = word.length - 1; i >= 0; i--){
        let char = word[i];
        if(vowels.includes(char)){
            return word.slice(0, i) + word.slice(i + 1);
        }
    }

}



console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'

//Least Common Multiple Recall

let leastCommonMultiple = function(num1, num2){

    for(let i = 1; i <= (num1*num2); i++){
        if(i%num1 === 0 && i%num2 === 0){
            return i;
        }
    }
}







console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10

//Choose Primes Recall

let choosePrimes = function(nums){

    let primeArr = [];

        for(let i = 0; i < nums.length; i++){
            let num = nums[i];
            if(checkPrime(num)){
                primeArr.push(num);
            }
        }

    return primeArr;
}

let checkPrime = function(n){

    if(n < 2) return false;

    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}



console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]

//Uncompress Recall

let uncompress = function(str){

    let uncompressed = '';

    for(let i = 0; i < str.length; i+=2){
        let char = str[i];
        let num = Number(str[i+1]);

        for(let times = 0; times < num; times++){
        uncompressed += char;
        }
    }
    return uncompressed;
}





console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'


//Hipsterfy Recall
let hipsterfy = function(sentence){

    let words = sentence.split(" ");
    hipsterfied = [];

    for(let i = 0; i < words.length; i++){
        let word = words[i];
        hipsterfied.push(removeVowel(word));
    }
    return hipsterfied.join(' ');

}

let removeVowel = function(word){

    let vowels = 'aeiou';

    for(let i = word.length; i >= 0; i--){
        let char = word[i];
        if(vowels.includes(char)){
            return word.slice(0, i) + word.slice(i+1);
        }
    }
}


console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

//Repeating Translate Recall

// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged
// - words that are 3 characters or longer are translated according to the
//   following rules:
//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')
//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
//
// Note that if words are capitalized in the original sentence, they should remain
// capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.
//
// Can you reduce the problem into helper functions?

// Your code here

let repeatingTranslate = function(sentence){

    let words = sentence.split(" ");
    let newSent = [];

    for(let i = 0; i < words.length; i++){
        let word = words[i];

        if(word.length < 3){
            newSent.push(word);
        }
        else{
            newSent.push(translateWord(word));
        }
    }

    return newSent.join(' ');
}

let translateWord = function(word){

    let vowels = 'aeiou';
    let lastChar = word[word.length - 1];

    if(vowels.includes(lastChar)){
        return word + word;
    }

    for(let i = 0; i < word.length; i++){
        return word + word.slice(i + 1);
    }

}

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"
