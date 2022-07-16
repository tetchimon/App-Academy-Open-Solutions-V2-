//Iterate Through Obj
function printObject(obj) {
    for(key in obj){
        let value = obj[key];
        console.log(key + " - "+ value);
    }
  }

  let bootcamp = {
    name: "App Academy",
    color: "Red",
    population: 120
  };

  printObject(bootcamp); // prints
  // name - App Academy
  // color - Red
  // population - 120

  //Cat Builder
  function catBuilder(name, color, toys) {

    let cat = {
        name: name,
        color: color,
        toys: toys
    };

    return cat;
  }

  console.log(catBuilder("Whiskers", "black", ["scratching-post", "yarn"]));
  // prints: { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }

  console.log(catBuilder("Nyan", "rainbow", ["poptarts"]));
  // prints: { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }

  //Destructure Array
  let bigArray = ["apple", 14, 32, 100, { name: "party" }, ["pineapple"]];

let [
    fruit,
    num1,
    num2,
    num3,
    name,
    fruit2
    ] = bigArray;

console.log(fruit);  //apple
console.log(num1); //14
console.log(num2);  //32
console.log(num3);  //100
console.log(name); //name: party
console.log(fruit2); //[pineapple]

// Example:
// let [firstEl] = bigArray;
// console.log(firstEl) // prints "apple"
