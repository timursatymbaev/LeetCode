/**
 * @param {number[]} nums
 * @return {number[]}
 */
buildArray = nums => nums.map((_, i) => nums[nums[i]]);
