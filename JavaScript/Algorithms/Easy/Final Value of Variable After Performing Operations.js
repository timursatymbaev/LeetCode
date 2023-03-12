/**
 * @param {string[]} operations
 * @return {number}
 */
function finalValueAfterOperations(operations) {
    let x = 0;
    for (let op of operations) {
        if (op === "++X" || op === "X++") {
            x++;
        } else if (op === "--X" || op === "X--") {
            x--;
        }
    }
    return x;
}
