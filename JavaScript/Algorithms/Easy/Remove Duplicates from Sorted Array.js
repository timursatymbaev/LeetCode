/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let set = new Set(nums);
    let result = set.size;
    let tempArr = [];

    for (let num of set.values()) {
        tempArr.push(num);
    }

    nums.splice(0, nums.length);

    for (let i = 0; i < result; i++) {
        nums.push(tempArr[i]);
    }

    return result;
};
