//While Loop Translation
function aCounter(word){
    let count = 0;
    for(i = 0; i < word.length; i++){
        let char = word[i];
        if(char === "a" || char === "A"){
            count++;
        }
    }
    return count;
}

console.log(aCounter("apple")); // => 1
console.log(aCounter("appleapple")); // => 2
console.log(aCounter("aAapple")); // => 3

//For Loop Translation

function aCounter(word){
    let count = 0;
    for(i = 0; i < word.length; i++){
        let char = word[i];
        if(char === "a" || char === "A"){
            count++;
        }
    }
    return count;
}

console.log(aCounter("apple")); // => 1
console.log(aCounter("appleapple")); // => 2
console.log(aCounter("aAapple")); // => 3

//Has Vowel
function hasVowel(str){
    let vowel;

    for(i = 0; i < str.length; i++){
        if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i]==="o" || str[i]==="u"){
            vowel = true;
        }

    }
    if (vowel === true) return true;
    else return false;

}

console.log(hasVowel('dog')); // true
console.log(hasVowel('conventional')); // true
console.log(hasVowel('rhythm')); // false

//Vowel Counter
function countVowels(word) {
    let counter = 0;
    for(i = 0; i < word.length; i++){
        if(word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u"){
            counter++;
        }
    }
        return counter;
  };

  console.log(countVowels("bootcamp")); // => 3
  console.log(countVowels("apple")); // => 2
  console.log(countVowels("pizza")); // => 2

  //Pig Latin Slice Research
  // So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

function pigLatinWord(word) {

    let vowels = 'aeiou';

    //check if word has with vowel
    let firstLetter = word[0];
    if(vowels.includes(firstLetter)){
    return word.concat('yay');
    }

    //iterate through word to find vowel
    for(let i = 0; i < word.length; i++){
        let char = word[i];
        if(vowels.includes(char)){
            return word.slice(i)  + word.slice(0, i) + 'ay';
        }
    }
};

//Abbreviate
function abbreviate(word){
    let vowels = 'aeiou';
    let newWord = [];

    for(i = 0; i < word.length; i++){
        let char = word[i];
        if(!vowels.includes(char.toLowerCase())){
        newWord = newWord + char;
        }
    }
    return newWord;
}


console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'

//Uncompress
function uncompress(str){

    let newStr = [];

    for(i = 0; i < str.length; i+=2){
        let char = str[i];
        let num = Number(str[i + 1]);

        //iterate to check times number appears
        for(let times = 0; times < num; times++){
            newStr += char;
        }
    }
    return newStr;
}



console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'

//Triplet True
function tripletTrue(str){
    for(let i = 0; i < str.length - 2; i++){
        if(str[i] === str[i+1] && str[i+1] === str[i+2]){
            return true;
        }
    }

    return false;
}


console.log(tripletTrue('caaabb'));        // true
console.log(tripletTrue('terrrrrible'));   // true
console.log(tripletTrue('runninggg'));     // true
console.log(tripletTrue('bootcamp'));      // false
console.log(tripletTrue('e'));             // false

//Silly Strings
function sillyString(word){

    let newWord = [];
    vowels = 'aeiou';

    for(i = 0; i < word.length; i++){
        let char = word[i];

        if(!vowels.includes(char)){
            newWord.push(char);
        }

        if(vowels.includes(char)){
            newWord.push(char + 'b' + char);
        }
    }
    return newWord.join('');
}

console.log(sillyString('stop'));       // stobop
console.log(sillyString('that'));       // thabat
console.log(sillyString('can'));        // caban
console.log(sillyString('cats'));       // cabats
console.log(sillyString('italy'));      // ibitabaly
console.log(sillyString('scooter'));    // scobooboteber

//More Dot Less Dash
function moreDotLessDash(str){

    let countDot = 0;
    let countDash = 0;

    for(i = 0; i < str.length; i++){
        if(str[i] === '.'){
            countDot++;
        }
        else if(str[i] === '-'){
            countDash++;
        }
    }

   return countDot > countDash;
}



console.log(moreDotLessDash('2-D arrays are fun. I think.'));           // true
console.log(moreDotLessDash('Morse code is great.'));                   // true
console.log(moreDotLessDash('.... . -.--'));                            // true
console.log(moreDotLessDash('.--. .-. --- --. .-. .- -- -- . .-.'));    // false
console.log(moreDotLessDash('high-flying acrobat.'));                   // false

//Has Three Vowels
function hasThreeVowels(str){

    let vowels = 'aeiou'
    let vCount = 0;
    newStr = [];

    for(i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            if(!newStr.includes(str[i])){
                newStr.push(str[i]);
            }
        }
    }

    for(v = 0; v < newStr.length; v++){
        vCount++;
    }

    if(vCount >= 3) return true;
    else return false;
}

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

//Last Index
function lastIndex(str, char) {

    return str.lastIndexOf(char);
}

console.log(lastIndex("abca", "a"))        // 3
console.log(lastIndex("mississipi", "i"))  // 9
console.log(lastIndex("octagon", "o"))     // 5
console.log(lastIndex("programming", "m")) // 7

//Double Letter Count
function doubleLetterCount(string) {

    let count = 0;

    for(i = 0; i < string.length; i++){
        if(string[i] === string[i+1]){
            count++;
        }
    }
    return count;
}

console.log(doubleLetterCount("the jeep rolled down the hill"));  // 3
console.log(doubleLetterCount("bootcamp")); // 1

//Caesar Cipher
// Feel free to use this variable:
//

function caesarCipher(string, num) {

    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newString = [];

    for(i = 0; i < string.length; i++){
       let char = string[i];
       let oldIndex = alphabet.indexOf(char);
       let newIndex = oldIndex + num;
         let newChar = alphabet[newIndex % alphabet.length];
         newString += newChar;
    }

    return newString;
 }




 console.log(caesarCipher("apple", 1)); // "bqqmf"
 console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
 console.log(caesarCipher("zebra", 4)); // "difve"

 //Vowel Cipher
 function vowelCipher(string) {

    vowels = "aeiou"
    newStr = [];

    for(i = 0; i < string.length; i++){
        let char = string[i];
        if(vowels.includes(char)){
            let oldIndex = vowels.indexOf(char);
            let newIndex = oldIndex + 1;
            let newChar = vowels[newIndex %  vowels.length];
            newStr += newChar;
        }
        else {
            newStr += char;
        }

    }

    return newStr;
}


console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"
