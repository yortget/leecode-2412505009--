/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;
    const MAX_DIV10 = Math.trunc(INT_MAX / 10); // 214748364
    const MIN_DIV10 = Math.trunc(INT_MIN / 10); // -214748364

    let rev = 0;
    while (x !== 0) {
        const digit = x % 10;
        x = Math.trunc(x / 10);

        // 检查溢出
        if (rev > MAX_DIV10 || (rev === MAX_DIV10 && digit > 7)) return 0;
        if (rev < MIN_DIV10 || (rev === MIN_DIV10 && digit < -8)) return 0;

        rev = rev * 10 + digit;
    }
    return rev;
};