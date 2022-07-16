//Iterate Through Obj Recall
function printObject(obj) {

    for(let key in obj){
      let value = obj[key];
      console.log(key + ' - ' + value);
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
