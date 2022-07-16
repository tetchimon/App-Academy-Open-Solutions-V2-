/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

const subsets = nums => {

  //global result
  let result = [];

  //depth first search recursive helper
  const dfs = (i, nums, slate) => {
    if(i === nums.length){ //base case
      result.push(slate.slice()); //making copy of slate to push into result, since we are using slate
      return;
    }

    //dfs recursive case
    //exclude case
    dfs(i + 1, nums, slate);
    //include case
    slate.push(nums[i]);
    dfs(i + 1, nums, slate);
    slate.pop();
  }

  dfs(0, nums, []); //set i to 0, pass in nums, slate is empty array
  return result;
};


// your code here
//Examples:
subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
