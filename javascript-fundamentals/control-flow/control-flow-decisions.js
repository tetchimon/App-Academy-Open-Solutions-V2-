//Is Five
function isFive(num) {
    if (num === 5) return true;
    else return false;
    }

    console.log(isFive(5)); // => true
    console.log(isFive(13)); // => false

    //Is Odd
    function isOdd(num) {
        if(num%2 === 0) return false;
        else return true;
      }

      console.log(isOdd(2)); // => false
      console.log(isOdd(5)); // => true
      console.log(isOdd(-17)); // => true

      //Is Substring
      function isSubstring(searchString, subString) {
        let search = searchString.toLowerCase();
        let sub = subString.toLowerCase();
        if(search.indexOf(sub) !== -1) return true;
        else return false;
      }

      console.log(isSubstring("The cat went to the store", "he cat went")); // => true
      console.log(isSubstring("Time to program", "time")); // => true
      console.log(isSubstring("Jump for joy", "joys")); // => false

      //Three or Seven
      function threeOrSeven(num) {
        if(num%3 === 0 || num%7 === 0) return true;
        else return false;
      }

      console.log(threeOrSeven(3));   // => true
      console.log(threeOrSeven(42));  // => true
      console.log(threeOrSeven(8));   // => false

      //String Included(*)
      function eitherStringIncluded(sentence, word1, word2) {
        let sent = sentence.toLowerCase();
        let one = word1.toLowerCase();
        let two = word2.toLowerCase();

        if(sent.indexOf(one) !== -1 || sent.indexOf(two) !== -1) return true;
        else return false;
    }

    console.log(eitherStringIncluded("how now brown cow?", "panther", "cow")); //=> true
    console.log(eitherStringIncluded("Question?", "Answer", "?")); //=> true
    console.log(eitherStringIncluded("I love programming", "apple", "potato")); //=> false
    console.log(eitherStringIncluded("Dance party!", "?", "what")); //=> false
