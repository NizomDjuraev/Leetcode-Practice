/**
 * @param {number[]} nums
 * @return {boolean}
 */

//used a set data structure here
//ideal for this question since sets store unique values with no duplicates
var containsDuplicate = function (nums) {
    numSet = new Set(nums);
    return !(numSet.size === nums.length);
};