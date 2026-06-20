var MyQueue = function() {
    this.inStack = [];   // 用于入队操作
    this.outStack = [];  // 用于出队和查看队首操作
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.inStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    // 如果输出栈为空，将输入栈所有元素倒入输出栈
    if (this.outStack.length === 0) {
        this._transfer();
    }
    return this.outStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.outStack.length === 0) {
        this._transfer();
    }
    return this.outStack[this.outStack.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.inStack.length === 0 && this.outStack.length === 0;
};

// 辅助方法：将输入栈元素转移到输出栈（倒序）
MyQueue.prototype._transfer = function() {
    while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
    }
};