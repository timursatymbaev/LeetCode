/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    const stack = [];
    const openBrackets = '({[';
    const closeBrackets = ')}]';
    for (let i = 0; i < s.length; i++) {
            const c = s.charAt(i);
        if (openBrackets.indexOf(c) !== -1) {
            stack.push(c);
        } else {
            if (stack.length === 0) {
                return false;
            }
            const lastOpen = stack.pop();
            const closeIndex = closeBrackets.indexOf(c);
            const openIndex = openBrackets.indexOf(lastOpen);
            if (closeIndex !== openIndex) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
