/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
    const digits = Array.from(String(n), Number);
    let i = digits.length - 2;
    
    while (i >= 0 && digits[i] >= digits[i+1]) {
        i--;
    }
    
    if (i < 0) return -1;
    
    let j = digits.length - 1;
    while (digits[j] <= digits[i]) {
        j--;
    }
    
    [digits[i], digits[j]] = [digits[j], digits[i]];
    
    let left = i + 1, right = digits.length - 1;
    while (left < right) {
        [digits[left], digits[right]] = [digits[right], digits[left]];
        left++;
        right--;
    }
    
    const result = parseInt(digits.join(''), 10);
    
    if (result > 2147483647) return -1;
    return result;
};