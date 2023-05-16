/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//iterate through nums and try adding each index with all the following indexes at the first number being tested
//keep iterating until the two nums are equal to the target
//push both index values and return
var twoSum = function (nums, target) {
    let ans = [];
    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                ans.push(i);
                ans.push(j);
            }
        }
    }
    return ans;
};
