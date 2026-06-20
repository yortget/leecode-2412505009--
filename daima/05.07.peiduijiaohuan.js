/**
 * @param {number} num
 * @return {number}
 */
var exchangeBits = function(num) {
    return ((num & 0x55555555) << 1) | ((num & 0xAAAAAAAA) >>> 1);
};