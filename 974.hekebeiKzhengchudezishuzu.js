/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    const map = new Map();
    map.set(0, 1);    
    let prefix = 0;
    let ans = 0;
    
    for (const num of nums) {
        prefix += num;
        const mod = ((prefix % k) + k) % k;
        const count = map.get(mod) || 0;
        ans += count;
        map.set(mod, count + 1);
    }
    
    return ans;
};