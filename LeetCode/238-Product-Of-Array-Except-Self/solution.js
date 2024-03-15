// *** Initial solution - Not 0(n) ***
// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var productExceptSelf = function (nums) {
//   let answer = [];

//   for (let i = 0; i < nums.length; i++) {
//     let tempArr = nums
//       .filter((element, index) => {
//         return index !== i;
//       })
//       .reduce((a, c) => {
//         return a * c;
//       });
//     answer.push(tempArr);
//   }
//   return answer;
// };

// Actual Solution in 0(n)
/**
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // First, create a prefix array that moves from the left,
  // gathering the running product of the prefix at each index
  let result = [];
  let prefix = [];
  //    loop through the left of the array
  for (let i = 0; i < nums.length; i++) {
    // no prefix to first in array so set to 1
    if (i === 0) {
      prefix[i] = 1;
    } else {
      //  Create prefix element by multiplying the previous num and prefix array elements
      prefix[i] = nums[i - 1] * prefix[i - 1];
    }
  }

  let suffix = [];
  //    for loop to generate suffix result
  for (let i = nums.length - 1; i >= 0; i--) {
    // If its at the end of the array place it as 1 as it has no suffix
    if (i === nums.length - 1) {
      suffix[i] = 1;
    } else {
      // suffix array element is created by multiplying the previous suffix and num array elements together
      suffix[i] = nums[i + 1] * suffix[i + 1];
    }
  }

  // loop to generate result array
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix[i] * suffix[i];
  }

  // Return result araay
  return result;
};
// Runtime 101ms
// Memory 6.68MB
// https://leetcode.com/problems/product-of-array-except-self/submissions/1203957290
