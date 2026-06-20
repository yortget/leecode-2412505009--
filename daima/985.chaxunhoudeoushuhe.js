/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
    let sumEven = 0;
    for (let num of nums) {
        if (num % 2 === 0) sumEven += num;
    }
    
    const answer = [];
    for (let [val, index] of queries) {
        const oldVal = nums[index];
        if (oldVal % 2 === 0) sumEven -= oldVal;
        nums[index] += val;
        const newVal = nums[index];
        if (newVal % 2 === 0) sumEven += newVal;
        answer.push(sumEven);
    }
    return answer;
};