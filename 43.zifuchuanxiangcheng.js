/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === "0" || num2 === "0") return "0";
    
    const m = num1.length, n = num2.length;
    const res = new Array(m + n).fill(0);
    
    for (let i = m - 1; i >= 0; i--) {
        const x = +num1[i];
        for (let j = n - 1; j >= 0; j--) {
            const y = +num2[j];
            res[i + j + 1] += x * y;
        }
    }
    
    for (let k = res.length - 1; k > 0; k--) {
        res[k - 1] += Math.floor(res[k] / 10);
        res[k] %= 10;
    }
    
    let result = res.join('').replace(/^0+/, '');
    return result || "0";
};