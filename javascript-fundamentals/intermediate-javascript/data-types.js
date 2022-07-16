//Has Double Letter
let hasDoubleLetter = function(str){

    if(typeof str !== 'string') return null;

    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i+1]){
            return true;
        }
    }
    return false;
}

console.log(hasDoubleLetter('deer')); // true
console.log(hasDoubleLetter('boot camp')); // true
console.log(hasDoubleLetter('toggle')); // true
console.log(hasDoubleLetter('taco')); // false
console.log(hasDoubleLetter('jumper')); // false
console.log(hasDoubleLetter(18)); // null
console.log(hasDoubleLetter(['array'])); // null

//First Vowel
let firstVowel = function(str){

    let vowels = 'aeiou';

    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            return str[i];
        }
    }
     return null;
 };

 console.log(firstVowel('battery')); // 'a'
 console.log(firstVowel('tunnel')); // 'u'
 console.log(firstVowel('dog')); // 'o'
 console.log(firstVowel('conventional')); // 'o'
 console.log(firstVowel('rhythm')); // null

 //Last Vowel
 let lastVowel = function(str) {

    let string = str.toLowerCase();
    let vowels = 'aeiou';

    for(let i = string.length - 1; i >= 0; i--){
        let char = string[i];
        if(vowels.includes(char)){
            return string[i];
        }
    }
    return null;
};

console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null

//Min Value
let minValue = function(nums){

    if(nums.length < 1) return null;

    let smallest = 0;
    for(let i = 0; i < nums.length; i++){

        if(nums[i] < nums[i+1]){
        smallest = nums[i];
        }

    }
    return smallest;
}

console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3 ])); // -7
console.log(minValue([])); // null

//Avg Val
let avgVal = function(arr) {

    if(arr.length < 1)  return null;

    let sum = 0;
    let average = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    average = sum/arr.length;
    return average;
}

console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null

//Max Value
let maxValue = function(nums){

    if(nums.length < 1) return null;

    let largestNum = 0;

    for(let i = 0; i < nums.length; i++){
        let num = nums[i];
        if(num > largestNum) {
            largestNum = num;
        }
    }
    return largestNum;
}


console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3 ])); // 3
console.log(maxValue([])); // null

//Reverb
let reverb = function(word){

    if(typeof word !== 'string') return null;

    let pointer = lastVowel(word);
    let newWord = word;

    for(let i = (word.length - 1) - pointer; i < word.length; i++){

        newWord += word[i];
    }
    return newWord;
}

let lastVowel = function(word){

    vowels = 'aeiou';
    word = word.toLowerCase();

    for(let i = word.length; i > 0; i--){
        let check = word[i];
        if(vowels.includes(check)){
            return i;
        }
    }
}


console.log(reverb('running')); // runninging
console.log(reverb('FAMILY'));  // FAMILYILY
console.log(reverb('trash'));   // trashash
console.log(reverb('DISH'));    // DISHISH
console.log(reverb(197393));    // null

//Prev Prime
let prevPrime = function(num){

    if(num <= 2) return null;

    for(let i = num - 1; i > 2; i--){

        if(isPrime(i)) return i;
    }

};

let isPrime = function(n){

    if(n < 2) return false;

    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return false
        }
    }
    return true;
}


console.log(prevPrime(32)); // 31
console.log(prevPrime(33)); // 31
console.log(prevPrime(14)); // 13
console.log(prevPrime(7));  // 5
console.log(prevPrime(4));  // 3
console.log(prevPrime(2));  // null
console.log(prevPrime(1));  // null

//Addition Mutator
let additionMutator = function(arr, n){

    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i]+n;
    }
    return arr;
}


let nums1 = [3, 7, 1, 2];
additionMutator(nums1, 4);
console.log(nums1);     // [ 7, 11, 5, 6 ]

let nums2 = [11, 9, 4];
additionMutator(nums2, -1);
console.log(nums2);     // [ 10, 8, 3 ]

//Alternating Words
let alternatingWords = function(arr){

    for(let i = 0; i < arr.length; i++){
        if(i === 0 || i % 2 === 0){
            arr[i] = arr[i].toUpperCase();
        }
        else{
            arr[i] = arr[i].toLowerCase();
        }
    }
    return arr;
}



let words1 = ['Belka', 'STRELKA', 'laika', 'DEZIK', 'Tsygan'];
alternatingWords(words1);
console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik', 'TSYGAN' ]

let words2 = ['Yellowstone', 'Yosemite', 'Zion', 'Acadia'];
alternatingWords(words2);
console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia' ]

//Reverse String
let reverseString = function(str){

    let newStr = "";
    for(let i = str.length - 1; i >= 0; i--){

        newStr += str[i];
    }
    return newStr;
}




console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'

//Remove Last Vowel
let removeLastVowel = function(word){

    let vowels = 'aeiou';

    for(let i = word.length - 1; i >= 0; i--){
        if(vowels.includes(word[i])){
            return word.slice(0, i) + word.slice(i + 1);
        }
    }
    return word;
}



console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'

//Remove E Words
let removeEWords = function(sentence){
    let words = sentence.split(' ');

    let newArr = [];
    for(let i = 0; i < words.length; i++){
        let word = words[i];
        if(!word.toLowerCase().includes('e')){
            newArr.push(word);
        }
    }
    return newArr.join(' ');
}


console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'
