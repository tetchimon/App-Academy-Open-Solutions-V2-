//Pairs Maker
let pairsMaker = function(arr){

    let newArr = [];

     for(let i = 0; i < arr.length; i++){
     //console.log(arr[i]);
         for(let j = i+1; j < arr.length; j++){
             newArr.push(arr[i], arr[j]);
         }

     }
     return newArr;
 }




 console.log(pairsMaker(['a', 'b', 'c', 'd'])); // =>
 // [ [ 'a', 'b' ],
 //   [ 'a', 'c' ],
 //   [ 'a', 'd' ],
 //   [ 'b', 'c' ],
 //   [ 'b', 'd' ],
 //   [ 'c', 'd' ] ]

 console.log(pairsMaker(['Rosemary', 'Alex', 'Connor'])); // =>
 // [ [ 'Rosemary', 'Alex' ],
 //   [ 'Rosemary', 'Connor' ],
 //   [ 'Alex', 'Connor' ] ]


 //Two Sum
 let twoSum = function(arr, target){

    let checksum = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i]+arr[j] === target) return true;
        }
    }
    return false;
}






console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
console.log(twoSum([4, 6, 2, 3], 8)); // true
console.log(twoSum([4, 6, 2, 3], 11)); // false


//Pair Product
let pairProduct = function(arr, num){

    let checkprod = 0;

    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i]*arr[j] === num) return true;
        }
    }
    return false;
}




console.log(pairProduct([4, 2, 5, 8], 16))    // true
console.log(pairProduct([8, 1, 9, 3], 8))     // true
console.log(pairProduct([3, 4], 12))          // true
console.log(pairProduct([3, 4, 6, 2, 5], 12)) // true
console.log(pairProduct([4, 2, 5, 7], 16))    // false
console.log(pairProduct([8, 4, 9, 3], 8))     // false
console.log(pairProduct([3], 12))             // false


//Strange Sums
let strangeSums = function(arr){

    let count = 0;

    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i]+arr[j] === 0){
                count++;
            }
        }
    }
    return count;
}


console.log(strangeSums([2, -3, 3, 4, -2]));     // 2
console.log(strangeSums([42, 3, -1, -42]));      // 1
console.log(strangeSums([-5, 5]));               // 1
console.log(strangeSums([19, 6, -3, -20]));      // 0
console.log(strangeSums([9]));                   // 0
