var maxSlidingWindow = function(nums, k) {
    if (nums.length === 0 || k === 0) return [];
    const n = nums.length;
    const result = [];
    // 用数组模拟双端队列，存储索引，head 和 tail 为队首、队尾指针（tail指向下一个空位）
    const deque = new Array(n);
    let head = 0, tail = 0;

    for (let i = 0; i < n; i++) {
        // 从队尾移除所有小于当前值的索引（保持队列单调递减）
        while (tail > head && nums[deque[tail - 1]] < nums[i]) {
            tail--;
        }
        // 将当前索引加入队尾
        deque[tail] = i;
        tail++;

        // 移除队首已滑出窗口的索引
        if (deque[head] <= i - k) {
            head++;
        }

        // 当窗口长度达到 k 时，记录最大值（队首对应值）
        if (i >= k - 1) {
            result.push(nums[deque[head]]);
        }
    }
    return result;
};