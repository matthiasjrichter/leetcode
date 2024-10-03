// https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/description/
//
// 3190. Find Minimum Operations to Make All Elements Divisible by Three
//
// You are given an integer array nums. In one operation, you can add or subtract 1 from any element of nums.
//
// Return the minimum number of operations to make all elements of nums divisible by 3.
//
//
//
// Example 1:
//
// Input: nums = [1,2,3,4]
//
// Output: 3
//
// Explanation:
//
// All array elements can be made divisible by 3 using 3 operations:
//
// Subtract 1 from 1.
// Add 1 to 2.
// Subtract 1 from 4.
// Example 2:
//
// Input: nums = [3,6,9]
//
// Output: 0
//
//
//
// Constraints:
//
// 1 <= nums.length <= 50
// 1 <= nums[i] <= 50
//
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var minimumOperations = function(nums) {
//
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let result = 0;
  nums.forEach((e) => {
    if (e % 3 !== 0) result++;
  });
  return result;
};

//for loop
const minimumOperations = (nums) => {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 3 !== 0) result++;
  }
  return result;
};

//reduce
const minimumOperations = (nums) => nums.reduce((a, c) => a + (c % 3 === 0 ? 0 : 1), 0);

//reduce alterntaive
const minimumOperations = (nums) => nums.reduce((a, c) => a + (c % 3 ? 1 : 0), 0);