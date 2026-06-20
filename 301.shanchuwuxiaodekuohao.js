/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    const isValid = (str) => {
        let count = 0;
        for (const ch of str) {
            if (ch === '(') count++;
            else if (ch === ')') {
                count--;
                if (count < 0) return false;
            }
        }
        return count === 0;
    };

    let queue = new Set([s]);
    const visited = new Set([s]);
    let result = [];

    while (queue.size > 0) {
        for (const str of queue) {
            if (isValid(str)) {
                result.push(str);
            }
        }
        if (result.length > 0) {
            return result;
        }

        const nextQueue = new Set();
        for (const str of queue) {
            for (let i = 0; i < str.length; i++) {
                const ch = str[i];
                if (ch !== '(' && ch !== ')') continue;
                const newStr = str.slice(0, i) + str.slice(i + 1);
                if (!visited.has(newStr)) {
                    visited.add(newStr);
                    nextQueue.add(newStr);
                }
            }
        }
        queue = nextQueue;
    }

    return [];
};