/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let write = 0; 
    let i = 0;
    const n = chars.length;
    
    while (i < n) {
        let c = chars[i];
        let count = 0;
        while (i < n && chars[i] === c) {
            count++;
            i++;
        }
        chars[write++] = c;
        if (count > 1) {
            const countStr = count.toString();
            for (let k = 0; k < countStr.length; k++) {
                chars[write++] = countStr[k];
            }
        }
    }
    return write;
};