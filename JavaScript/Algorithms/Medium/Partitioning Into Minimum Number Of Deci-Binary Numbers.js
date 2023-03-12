/**
 * @param {string} n
 * @return {number}
 */
function minPartitions(n) {
    let maxDigit = 0;
    for (let i = 0; i < n.length; i++) {
        let digit = parseInt(n[i]);
        if (digit > maxDigit) {
            maxDigit = digit;
        }
    }
    return maxDigit;
}
