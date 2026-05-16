/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;
    const MAX_DIV10 = Math.floor(INT_MAX / 10); // 214748364
    const MIN_DIV10 = Math.floor(INT_MIN / 10); // -214748364 但这里我们按正数处理

    let i = 0;
    const n = s.length;

    // 1. 跳过前导空格
    while (i < n && s[i] === ' ') {
        i++;
    }

    // 2. 处理符号
    let sign = 1;
    if (i < n && (s[i] === '+' || s[i] === '-')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // 3. 转换数字部分
    let result = 0;
    let digitFound = false;
    while (i < n && s[i] >= '0' && s[i] <= '9') {
        digitFound = true;
        const digit = s.charCodeAt(i) - '0'.charCodeAt(0);
        
        // 溢出检查
        if (result > MAX_DIV10 || (result === MAX_DIV10 && digit > 7)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }
        
        result = result * 10 + digit;
        i++;
    }

    // 如果没有读取到任何数字，返回0
    if (!digitFound) return 0;

    return sign * result;
};