// https://neetcode.io/problems/is-anagram
// 
// Is Anagram
// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
// 
// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
// 
// Example 1:
// 
// Input: s = "racecar", t = "carrace"
// 
// Output: true
// Example 2:
// 
// Input: s = "jar", t = "jam"
// 
// Output: false
// Constraints:
// 
// s and t consist of lowercase English letters.
// 
// class Solution {
//     /**
//      * @param {string} s
//      * @param {string} t
//      * @return {boolean}
//      */
//     isAnagram(s, t) {}
// }

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        return [...s].sort().join() === [...t].sort().join()
    }
}

//Hash Maps
class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        let sMap = new Map()
        let tMap = new Map()

        for (let i = 0; i < s.length; i++){
            sMap.set(s[i], (sMap.get(s[i]) || 0) + 1)
            tMap.set(t[i], (tMap.get(t[i]) || 0) + 1)
        }
        console.log(sMap, tMap)
        for (let [char, count] of sMap.entries()) {
            if (tMap.get(char) !== count) return false;
        }

        return true
    }    
}

//Single Hash Map and updating the counts
class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        let sMap = new Map()
        for (let char of s) {
            sMap.set(char, (sMap.get(char) || 0) + 1)
        }

        for (let char of t) {
            if (!sMap.has(char) || sMap.get(char) === 0) return false
            sMap.set(char, sMap.get(char) - 1)
        }

        return true
    }    
}

