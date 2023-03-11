/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
    let map = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
    ]);

    let result = 0;
    let prev = 0;

    for (let i = 0; i < s.length; i++) {
        let curr = map.get(s[i]);
        result += curr;
        if (curr > prev) {
            result -= 2 * prev;
        }
        prev = curr;
    }

    return result;
}
