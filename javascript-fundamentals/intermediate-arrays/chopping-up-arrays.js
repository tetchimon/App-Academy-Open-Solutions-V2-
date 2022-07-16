//Remove From Array Research

function removeFromArray(location, arr) {

    if(location === "FRONT"){
        arr.shift();
    }
    else if(location === "BACK"){
        arr.pop();
    }
    else {
        console.log("ERROR");
    }

}

testArray = [0,1,2,3,4]

removeFromArray("FRONT", testArray)
console.log(testArray) // [1,2,3,4]

removeFromArray("BACK", testArray)
console.log(testArray) // [1,2,3]

removeFromArray("MIDDLE", 4, testArray) // "ERROR"
console.log(testArray) // [1,2,3]


//Popper
let popper = function(array, num){

    let newArr = [];

    for(let i = 0; i < num; i++){  //num acts as new length of array, since we remove all after num

        newArr.push(array.pop());
    }

    return newArr;

}


let arr1 = ['a', 'b', 'c', 'd', 'e'];
console.log(popper(arr1, 2)); // [ 'e', 'd' ]
console.log(arr1); // [ 'a', 'b', 'c' ]

let arr2 = ['kale', 'spinach', 'collard greens', 'cabbage'];
console.log(popper(arr2, 1)); // [ 'cabbage' ]
console.log(arr2); // [ 'kale', 'spinach', 'collard greens' ]

//Rotate Right
let rotateRight = function(array, num){

    //slice copy of array
    let copy = array.slice();

        //iterate num times
        for(let i = 0; i < num; i++){
        //pop last element off

        let element = copy.pop(); //return type is the element that was popped off

        copy.unshift(element);    //push back into same copy array
        }

    //return copied array
    return copy;
}



let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]


//Rotate
let rotate = function(array, num){

    //ROTATE BY NUM TIMES EVEN THOUGH QUESTION DOESN'T EXPLICITLY SAY TO
    //when num is positive, remove last and put it first
    if(num > 0){
        for(let i = 0; i < num; i++){
        //pop off last element
        element = array.pop(); //return type is the ELEMENT
        array.unshift(element); //unshift element back in to start
        }
    }

    //when num is negative, remove first and put it last
    if(num < 0){
        for(let i = 0; i < -num; i++){
        element = array.shift();//shift first element off
        array.push(element);//push element back in to the end
        }
    }
}




let arr = ['a', 'b', 'c', 'd', 'e'];
rotate(arr, 2);
console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
rotate(animals, -1);
console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]

//Initials
let initials = function(name){

    let str = name.split(" "); //split the full name into array of words
    let arr = [];

    for(let i = 0; i < str.length; i++){ //iterate through each word

        initial = str[i];
        initial = initial.split(''); //each word string is split into array of alphabets
        initial = initial.shift(); //first alphabet of each word is saved in variable
        arr.push(initial.toUpperCase()); //made uppercase and pushed into a new array
    }
    return arr.join(''); //array is joined into string and returned
}


console.log(initials('anna paschall')); // 'AP'
console.log(initials('Mary La Grange')); // 'MLG'
console.log(initials('brian crawford scott')); // 'BCS'
console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'

//Longest Word
let longestWord = function(sentence) {
    let words = sentence.split(' ');
    let longestWord = '';

    for(let i = 0; i < words.length; i++) {
        let word = words[i];
        if(word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
};

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''


//Shortest Word
let shortestWord = function(sentence){

    let words = sentence.split(' ');
    let smallestWord = 'Pneumonoultramicroscopicsilicovolcanoconiosis'; //longest word in english lol

    for(let i = words.length - 1; i >= 0; i--){ //iterating backwards for last tie first
    //for(let i = 0; i < words.length; i++){ //iterating forwards for first tie first
        let word = words[i];
        if(word.length < smallestWord.length){
            smallestWord = word;
        }
    }

    return smallestWord;

    //split sentence into array
    //iterate through array backwards
    //check length of each element, compare to length of sentence.length
    //smaller element length becomes new check variable
}

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'

//Reverse Sentence
let reverseSentence = function(sentence){

    words = sentence.split(' ');
    copy = sentence.split(' ');
    newSentence = [];

    for(let i = 0; i < words.length; i++){
        element = copy.pop();
        newSentence.push(element);
    }
    return newSentence;
}





console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'

//Contains Word
let containsWord = function(sentence, targetWord){

    let words = sentence.split(' ');

    for(let i = 0; i < words.length; i++){
        if(words[i].toLowerCase() === targetWord.toLowerCase()){
            return true;
        }
    }
    return false;
}



console.log(containsWord('sounds like a plan', 'like')); // true
console.log(containsWord('They are great', 'they')); // true
console.log(containsWord('caterpillars are great animals', 'cat')); // false
console.log(containsWord('Cast the net', 'internet')); // false

//Abbreviate Words
let abbreviateWords = function(sentence){

    newSent = [];
    let sent = sentence.split(' '); //split into individual words
    for(let i = 0; i < sent.length; i++){
        let word = sent[i];

        if(word.length > 4){
            newSent.push(checkVowels(word));
        }
        else{
            newSent.push(word);
        }
    }
    return newSent.join(' ');
}


let checkVowels = function(word){
    let vowels = ['a','e','i','o','u'];
    let noVowels = word.split('');

    for(let i = 0; i < noVowels.length; i++){
        let str = noVowels[i];
        if(vowels.includes(str)){
            noVowels.splice(i, 1);
        }
    }
    return noVowels.join('');
}

console.log(checkVowels('test'));

console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg


//Snake to Camel
let snakeToCamel = function(str){

    str = str.toLowerCase();
    arrWords = str.split('_');
    let PascalCased = [];

    for(let i = 0; i < arrWords.length; i++){

        arrLetters = arrWords[i].split('');
        arrLetters.splice(0, 1, arrLetters[0].toUpperCase());
        //console.log(arrLetters.join(''));
        PascalCased.push(arrLetters.join(''));
    }
    return PascalCased.join('');
}



console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'


//Hipsterfy

let hipsterfy = function(sentence){

    words = sentence.split(' ');
    let newSentence = [];

    for(let i = 0; i < words.length; i++){
        let char = words[i];
        newSentence.push(removeLastVowel(char));
    }
    return newSentence.join(' ');
}

let removeLastVowel = function(word){

    let vowels = 'aeiou';

    for(let i = word.length - 1; i >= 0; i--){
        let char = word[i];
        if(vowels.includes(char)){
            return word.slice(0, i) + word.slice(i + 1);
        }
    }
    return word;
}


console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

//Repeating Translate
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

    let words = sentence.split(' ');
    let vowels = "aeiou";
    let newSent = [];

    for(let i = 0; i < words.length; i++){
        let word = words[i];
        let lastLetter = (word[word.length-1]);

        if(word.length < 3){
            newSent.push(word);
        }
        else if(vowels.includes(lastLetter)){
            newSent.push(doubleWord(word));
        }
        else if(!vowels.includes(lastLetter)){
            newSent.push(repeat(word));
        }
    }
    return newSent.join(' ');
}


let doubleWord = function(word){

    return word+word;
}

let repeat = function(word){
    let vowels = "aeiou";
    let newWord = '';

    for(let i = word.length - 1; i >= 0; i--){
        let char = word[i];
        //newWord += word.slice(0, i);
        if(vowels.includes(char)){
            newWord = word.slice(0, i + word.length) + word.slice(i, word.length);
        }
    }
    return newWord;
}



console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"


//Consonant Cancel
function consonantCancel(sentence) {

    let words = sentence.split(" ");
    let newSent = '';

    for(let i = 0; i < words.length; i++){
        let word = words[i];
        newSent += deleteConsonant(word);
    }
    return newSent;
}

let deleteConsonant = function(word){

    const vowels = "aeiou";
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            return word.slice(i) + " ";
        }
    }
}

console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"

//Same Char Collapse
///DOES NOT WORK

function sameCharCollapse(str) {

    for(let i = str.length; i >= 0; i--){
         if(str[i] === str[i+1]){
            str = delAdjacentPair(str);
         }
         return str;
    }

}

function delAdjacentPair(str){
    let newStr = '';
    for(let i = str.length; i >= 0; i--){
        if(str[i] === str[i+1]){
            newStr = (str.slice(0, i)+str.slice(i+2));
        }
    }
    return newStr;
}

console.log(delAdjacentPair('zzzxaaxy'));

console.log(sameCharCollapse("zzzxaaxy"));  // "zy"
// because zzzxaaxy -> zxaaxy -> zxxy -> zy
console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv
