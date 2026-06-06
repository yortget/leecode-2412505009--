/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (dividend === -Math.pow(2, 31) && divisor === -1) {
        return Math.pow(2, 31) - 1;
    }
    
    const negative = (dividend < 0) ^ (divisor < 0);
    
    let a = dividend < 0 ? dividend : -dividend;
    let b = divisor < 0 ? divisor : -divisor;
    
    let result = 0;
    while (a <= b) {
        let temp = b;
        let multiple = 1;
        while (temp >= -Math.pow(2, 30) && a <= temp + temp) {
            temp += temp;
            multiple += multiple;
        }
        a -= temp;
        result += multiple;
    }
    
    return negative ? -result : result;
};