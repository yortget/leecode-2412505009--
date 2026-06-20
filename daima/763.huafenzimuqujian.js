/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const lastPos = {};
    for (let i = 0; i < s.length; i++) {
        lastPos[s[i]] = i;
    }
    
    const result = [];
    let start = 0;      
    let end = 0;        
    
    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, lastPos[s[i]]);
        if (i === end) {
            result.push(end - start + 1);
            start = i + 1;
        }
    }
    
    return result;
};