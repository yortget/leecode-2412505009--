/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let stack = [];
    let res = 0;
    let sign = 1;  
    let num = 0;
    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (ch >= '0' && ch <= '9') {
            num = num * 10 + (ch - '0');
        } else if (ch === '+') {
            res += sign * num;
            num = 0;
            sign = 1;
        } else if (ch === '-') {
            res += sign * num;
            num = 0;
            sign = -1;
        } else if (ch === '(') {
            stack.push(res);
            stack.push(sign);
            res = 0;
            sign = 1;
        } else if (ch === ')') {
            res += sign * num;
            num = 0;
            const prevSign = stack.pop();
            const prevRes = stack.pop();
            res = prevRes + prevSign * res;
        }
    }
    res += sign * num;
    return res;
};