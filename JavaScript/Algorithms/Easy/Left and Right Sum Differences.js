/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function(nums) {
    const n = nums.length;
    const leftSum = new Array(n);
    const rightSum = new Array(n);
    const answer = new Array(n);
    
    leftSum[0] = nums[0];
    rightSum[n - 1] = nums[n - 1];
    
    for (let i = 1; i < n; i++) {
        leftSum[i] = leftSum[i - 1] + nums[i];
    }
    
    for (let i = n - 2; i >= 0; i--) {
        rightSum[i] = rightSum[i + 1] + nums[i];
    }
    
    for (let i = 0; i < n; i++) {
        const left = i > 0 ? leftSum[i - 1] : 0;
        const right = i < n - 1 ? rightSum[i + 1] : 0;
        answer[i] = Math.abs(left - right);
    }
    
    return answer;
};

function getSum(nums, start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += nums[i];
    }
    return sum;
}
