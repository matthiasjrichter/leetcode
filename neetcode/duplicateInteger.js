// https://neetcode.io/problems/duplicate-integer
// 
// Duplicate Integer
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
// 
// Example 1:
// 
// Input: nums = [1, 2, 3, 3]
// 
// Output: true
// Example 2:
// 
// Input: nums = [1, 2, 3, 4]
// 
// Output: false
// 
// class Solution {
//     /**
//      * @param {number[]} nums
//      * @return {boolean}
//      */
//     hasDuplicate(nums) {}
// }

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        return !nums.every((e, _, a) => a.indexOf(e) === a.lastIndexOf(e))
    }
}

//hashSet
class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hashSet = new Set()
        for (let num of nums){
            if (hashSet.has(num)) return true
            hashSet.add(num)
        }
        return false
    }
}

