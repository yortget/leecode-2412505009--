var MyStack = function() {
    this.q1 = []; // 主队列，队首为栈顶
    this.q2 = []; // 辅助队列
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    // 将新元素放入 q2
    this.q2.push(x);
    // 将 q1 中所有元素依次移入 q2，使新元素位于队首
    while (this.q1.length > 0) {
        this.q2.push(this.q1.shift());
    }
    // 交换 q1 和 q2，此时 q1 为栈顺序
    [this.q1, this.q2] = [this.q2, this.q1];
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.q1.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.q1[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length === 0;
};