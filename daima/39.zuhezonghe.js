/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    candidates.sort((a,b)=>a-b);
    
    const backtrack = (start, current, sum) => {
        if (sum === target) {
            result.push([...current]);
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            const val = candidates[i];
            if (sum + val > target) break; 
            current.push(val);
            backtrack(i, current, sum + val);
            current.pop();
        }
    };
    
    backtrack(0, [], 0);
    return result;
};