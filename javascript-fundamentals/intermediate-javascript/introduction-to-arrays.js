//Array Index Of

function wordWithinArray(array, word) {
    if(array.indexOf(word) !== -1) return true;
    else return false;
};

console.log(
  wordWithinArray(["apple", "banana", "caramel", "chocolate"], "apple")
); //=> true

console.log(wordWithinArray(
  ["dog", "cat", "camel", "bird"], "camel")
); //=> true

console.log(
  wordWithinArray(["apple", "banana", "caramel", "chocolate"], "pineapple")
); //=> false

console.log(wordWithinArray(
  ["dog", "cat", "camel", "bird"], "panther")
); //=> false


//First and Last
function firstAndLast(arr){

    let addFirstLast = 0;
    let subFirstLast = 0;

    if(arr.length % 2 === 0){ //even number of elements
        //add first and last index
        addFirstLast = arr[0] + arr[arr.length - 1];
        return addFirstLast;
    }
    else{
        //sub first and last index
        subFirstLast = arr[0] - arr[arr.length - 1];
        return subFirstLast;
    }
}



console.log(firstAndLast([1, 2, 3, 4]));    // 5
console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
console.log(firstAndLast([12, 5]));         // 17
console.log(firstAndLast([12]));            // 0
console.log(firstAndLast([7, 11, 3]));      // 4

//Add Arrays
function combineArray(array1, array2) {

    return array1.concat(array2);
}

console.log(combineArray([1, 2], [3, 4])); // => [1, 2, 3, 4]
console.log(combineArray([17, 5], [6, 7]));  // => [17, 5, 6, 7]

//Three Increasing
let threeIncreasing = function(arr){

    for(let i = 0; i < arr.length; i++){
        if(arr[i] + 1 === arr[i+1] && arr[i+1] + 1 === arr[i+2]){
            return true;
        }

    }
    return false;
}



console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));     // true
console.log(threeIncreasing([2, 7, 8, 9]));                 // true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));        // false
console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8]));        // false

//My Includes
let myIncludes = function(arr, target){

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return true;
        }
    }
 return false;
}

console.log(myIncludes(['a', 'b', 'c', 'e'], 'c')); // true
console.log(myIncludes(['a', 'b', 'c', 'e'], 'a')); // true
console.log(myIncludes(['a', 'b', 'c', 'e'], 'z')); // false
console.log(myIncludes([43, -7, 11, 13], 11)); // true
console.log(myIncludes([43, -7, 11, 13], 1)); // false

//My Index Of
let myIndexOf = function (arr, target) {

    for(let i = 0; i < arr.length; i++){

        //check if target is found
        if(arr[i] === target){
            //return first index
            return i;
        }
    }
    return -1 //target not found
}

console.log(myIndexOf(['a', 'b', 'c', 'e'], 'c')); // 2
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'e')); // 3
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'z')); // -1
console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
console.log(myIndexOf([43, -7, 11, 13], 1)); // -1

//Sum Array
function sumArray(array) {

    let sum = 0;

    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30

//Product Array
let productWithReduce = function(nums){

    let product = 1;

    for(let i = 0; i < nums.length; i++){

        product *= nums[i];
    }
    return product;
}



console.log(productWithReduce([10, 3, 5, 2])); // 300
console.log(productWithReduce([4, 3])); // 12

//Doubler
function doubler(numbers) {

    let newArr = [];

    for(i = 0; i < numbers.length; i++){
        newArr.push(numbers[i]*2);
    }
    return newArr;
}

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]
