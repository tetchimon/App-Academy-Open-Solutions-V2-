//Goodbye(*)
function goodbye(name) {
    return `Bye ${name}`;
  }

  console.log(goodbye("Daniel")); // => "Bye Daniel."
  console.log(goodbye("Mark")); // => "Bye Mark."
  console.log(goodbye("Beyonce")); // => "Bye Beyonce."

  //Muscle Memory
  function sayHello(name) {
    let msg = "Hello, " + name + ". How are you?";
    return msg;
  }


  console.log(sayHello("world"));

  //Plus Five
  function plusFive(num) {
    return num+5;
}

console.log(plusFive(10));  // => 15
console.log(plusFive(2));   // => 7
console.log(plusFive(-8));  // => -3

//Call This Function
function isCool(string) {
    let coolSentence = string + " is cool!"
    console.log(coolSentence)
    return coolSentence
  }

  isCool("Music");
  // Call the above function passing in the below arguments:
  // Music
  // JavaScript
  // The world

//Average of Two
function averageOfTwo(num1, num2) {
    return (num1+num2)/2;
  }

  console.log(averageOfTwo(3, 7)); // => 5
  console.log(averageOfTwo(16, 5)); // => 10.5
  console.log(averageOfTwo(2, 7.5)); // => 4.75

  //Hello
  function hello(str) {
    console.log(`Hello, ${str}`);
  }

  hello("cat"); // prints "Hello, cat"
  hello("Helen"); // prints "Hello, Helen"
  hello("Sting"); // prints "Hello, Sting"

  //Divide by Three
  function divideByThree(num) {
    return num/3;
  }

  console.log(divideByThree(9)); // => 3
  console.log(divideByThree(15)); // => 5
  console.log(divideByThree(98)); // => 32.666666666666664

  //Whisper
  function whisper(str) {
    return `...${str.toLowerCase()}...`;
  }

  console.log(whisper("Hey Buddy")); // => "...hey buddy..."
  console.log(whisper("YEA! that was fun")); // => "...yea! that was fun..."

  //Average of Four
  function averageOfFour(num1, num2, num3, num4){
    return (num1+num2+num3+num4)/4;
}

console.log(averageOfFour(10, 10, 15, 5)); // => 10
console.log(averageOfFour(3, 10, 11, 4)); // => 7
console.log(averageOfFour(1, 2, 3, 4)); // => 2.5

// /Yell(*)
function yell(str) {
    return str.toUpperCase()+"!!!";
}

console.log(yell("I want to go to the store")); // => "I WANT TO GO TO THE STORE!!!"
console.log(yell("Time to program")); // => "TIME TO PROGRAM!!!"

//Echo(*)
function echo(string) {
    return console.log(string.toUpperCase() + " ... " + string + " ... " + string.toLowerCase());
  }

  echo("Mom!"); // => prints "MOM! ... Mom! ... mom!"
  echo("hey"); // => prints "HEY ... hey ... hey"
  echo("JUMp"); // => prints "JUMP ... JUMp ... jump"
