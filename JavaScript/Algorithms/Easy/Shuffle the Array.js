/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
function shuffle(nums) {
    const n = nums.length / 2;
    const x = nums.slice(0, n);
    const y = nums.slice(n);
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(x[i], y[i]);
    }
    return result;
}
