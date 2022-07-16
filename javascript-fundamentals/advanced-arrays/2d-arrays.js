//Two Dimensional Sum
let twoDimensionalSum = function(arr){

    let sum = 0;

    for(let row = 0; row < arr.length; row++){
        let subArr  = arr[row];
        for(let col = 0; col < subArr.length; col++){
            sum += subArr[col]
        }
    }
    return sum;
}



let arr1 = [
    [1, 3],
    [-4, 7, 10],
    [2]
];
console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [
    [],
    [3, 1, 2],
];
console.log(twoDimensionalSum(arr2)); // 6

//Two Dimensional Product
let twoDimensionalProduct = function(array){

    let product = 1;

    for(let row = 0; row < array.length; row++){
        let subArr = array[row];
        for(let col = 0;  col < subArr.length; col++){
            product *= subArr[col];
        }
    }
    return product;
}


let arr1 = [
    [6, 4],
    [5],
    [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
    [11, 4],
    [2]
];
console.log(twoDimensionalProduct(arr2)); // 88

//Max in Matrix
function maxInMatrix(matrix) {

    let max = 0;

    for(let row = 0; row < matrix.length; row++){
        let subMatrix = matrix[row];
        for(let col = 0; col < subMatrix.length; col++){
            if(matrix[row][col] > max){
                max = matrix[row][col];
            }
        }
    }
    return max;
}


matrix = [[11,  2,-99],
          [20, 19, 10],
          [47, 72, 56]]

console.log(maxInMatrix(matrix)); // 72


//Max in Columns

function maxColumn(matrix) {
    const height = matrix.length;
    const width = matrix[0].length;

    const maxColumns = [];
        for (let col = 0 ; col < width ; col++) {
          let colMax = matrix[0][col];
          for (let row = 1 ; row < height ; row++) {
              if (matrix[row][col] > colMax) {
                  colMax = matrix[row][col];
              }
          }
          maxColumns.push(colMax);
        }

    return maxColumns;
  }


  matrix = [[ 5,  9, 21],
            [ 9, 19,  6],
            [12, 14, 15]]
  console.log(maxColumn(matrix)); // [12, 19, 21]


  //Zip
  let zip = function(arr1, arr2){

    zipped = [];

    for(let i = 0; i < arr1.length; i++){
        let el1 = arr1[i];
        let el2 = arr2[i]

        zipped.push([el1, el2]);
    }
    return zipped;
}



console.log(zip([1, 2, 3, 4], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, 'vier' ] ]

console.log(zip(['eins', 'zwei', 'drei'], [1, 2, 3]));
// [ [ 'eins', 1 ], [ 'zwei', 2 ], [ 'drei', 3 ] ]

console.log(zip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]

//Zany Zip
let zanyZip = function(array1, array2){

    zipped = [];

    for(let i = 0; i < array1.length || i < array2.length; i++){
        ele1 = array1[i];
        ele2 = array2[i];

        if(ele1 === undefined){
            ele1 = null;
        }
        if(ele2 === undefined){
            ele2 = null;
        }
        zipped.push([ele1, ele2]);
    }
    return zipped;
}



console.log(zanyZip([1, 2], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]

console.log(zanyZip([1, 2, 3, 4], ['eins', 'zwei', 'drei']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]

console.log(zanyZip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]

//Matrix Addition
let matrixAddition = function(m1, m2) {
    let sum = [];
    for (let row = 0; row < m1.length; row++) {
        let subArray = [];
        for (let col = 0; col < m1[0].length; col++) {
            sum.push(m1[row][col] + m2[row][col]);
        }
        sum.push(subArray);
    }
    return sum;
};


let matrixA = [[2,5], [4,7]]
let matrixB = [[9,1], [3,0]]
let matrixC = [[-1,0], [0,-1]]
let matrixD = [[2, -5], [7, 10], [0, 1]]
let matrixE = [[0 , 0], [12, 4], [6,  3]]

console.log(matrixAddition(matrixA, matrixB)); // [[11, 6], [7, 7]]
console.log(matrixAddition(matrixA, matrixC)); // [[1, 5], [4, 6]]
console.log(matrixAddition(matrixB, matrixC)); // [[8, 1], [3, -1]]
console.log(matrixAddition(matrixD, matrixE)); // [[2, -5], [19, 14], [6, 4]]

//Lucky Numbers
function luckyNumbers(matrix) {

    height = matrix.length //rows
    width  = matrix[0].length //columns

    let maxColumn = [];
    let luckyNumbers = [];

    //Look for max num in each collumn, and make an array of results
    for(let col = 0; col < width; col++){
        let colMax = matrix[0][col] //iterating through cols
        for(let row = 1; row < height; row++){
            if(matrix[row][col] > colMax){
                colMax = matrix[row][col];
            }
        }
        maxColumn.push(colMax);
    }

    //Look for min value in array of max in column
    luckyNumbers.push(Math.min(...maxColumn));
    return luckyNumbers;

};


matrix = [[ 5,  9, 21],
          [ 9, 19,  6],
          [12, 14, 15]]

console.log(luckyNumbers(matrix)); // [12]

matrix = [[ 5, 10,  8,  6],
          [10,  2,  7,  9],
          [21, 15, 19, 10]]

console.log(luckyNumbers(matrix)); // [10]


//Spiral Matrix
let spiralOrder = function(matrix){

    //using pointers to mark boundary and dir to control direction of movement

    let top = 0; //row 0 start
    let bot = matrix.length - 1; //last index of row
    let left = 0; //col 0 start
    let right = matrix[0].length - 1; //last index of col
    let dir = 0; //direction 0 moves pointer left to right
    //let i = 0;
    let ans =  [];

    while(top <= bot && left <= right)
    {
        //CASE 1: if dir = 0 then move pointer from left to right
        if(dir === 0){
            for(let i = left; i <= right; i++){
                ans.push(matrix[top][i]); //print top row, col changes
            }
            top++;  //increase row number by 1 to switch to second row
        }
        //CASE 2: if dir = 1 then move pointer from top to bottom
        else if(dir === 1){
            for(let i = top; i <= bot; i++){
                ans.push(matrix[i][right]); //print right col, row changes
            }
            right--; //decrease col number by 1 to move pointer inwards
        }
        //CASE 3: if dir = 2 then move pointer from right to left
        else if(dir === 2){
            for(let i = right; i >= left; i--){ //iterating from right to left
                ans.push(matrix[bot][i]);
            }
            bot--;
        }
        //CASE 4: if dir = 3 then move pointer from bottom to top
        else if(dir === 3){
            for(let i = bot; i >= top; i--){
                ans.push(matrix[i][left]);
            }
            left++;
        }

        dir = (dir+1) % 4;
    }
    return ans;
}


matrix = [[ 1, 2, 3],
          [ 4, 5, 6],
          [ 7, 8, 9]]

console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [[1, 2, 3, 4],
          [5, 6, 7, 8],
          [9,10,11,12]]


console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]


//Pyramid Array
// For example, given 2, 3, 7, 5, 9 as the base, we should construct this pyramid:
//
//           85
//         37  48
//       15  22  26
//    5   10   12   14
//  2   3    7    5    9
//
//
// Your code here

let pyramidArray = function(base){

    let pyramid = [base];

    while(pyramid.length < base.length){

        let next = adjacentAdd(pyramid[0]);
        pyramid.unshift(next);
    }

    return pyramid;
}


let adjacentAdd = function(arr){

    adjacentArr = [];
    let sum = 0;


    for(let i = 0; i < arr.length - 1; i++){

        sum = arr[i]+arr[i+1];
        adjacentArr.push(sum);
    }

    return adjacentArr;
};



let p1 = pyramidArray([2, 3, 7, 5, 9]);
console.log(p1);
// [
//   [ 85 ],
//   [ 37, 48 ],
//   [ 15, 22, 26 ],
//   [ 5, 10, 12, 14 ],
//   [ 2, 3, 7, 5, 9 ]
// ]

let p2 = pyramidArray([2, 2, 2, 2]);
//console.log(p2);
// [
//   [ 16 ],
//   [ 8, 8 ],
//   [ 4, 4, 4 ],
//   [ 2, 2, 2, 2 ]
// ]

//Pascal's Triangle
// For example, here are the first 5 levels of Pascal's triangle:
//       1
//      1 1
//     1 2 1
//    1 3 3 1
//   1 4 6 4 1

// Your code here

let pascalsTriangle = function(height) {

    let triangle = [[1]];

    while(triangle.length < height){

        let last = triangle[triangle.length - 1]; //element at last index
        let next = [1];

        for(let i = 0; i < last.length - 1; i++){
            next.push(last[i] + last[i+1]);
        }

        next.push(1);
        triangle.push(next);
    }
    return triangle;
};

console.log(pascalsTriangle(5));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1]
// ]

console.log(pascalsTriangle(7));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1],
//     [1, 5, 10, 10, 5, 1],
//     [1, 6, 15, 20, 15, 6, 1]
// ]
