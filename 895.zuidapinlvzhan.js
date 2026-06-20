var FreqStack = function() {
    this.freq = new Map();      
    this.group = new Map();     
    this.maxFreq = 0;          
}

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
    const f = (this.freq.get(val) || 0) + 1;
    this.freq.set(val, f);
    if (f > this.maxFreq) this.maxFreq = f;
    if (!this.group.has(f)) {
        this.group.set(f, []);
    }
    this.group.get(f).push(val);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    const stack = this.group.get(this.maxFreq);
    const val = stack.pop();
    
    const f = this.freq.get(val) - 1;
    if (f === 0) {
        this.freq.delete(val);
    } else {
        this.freq.set(val, f);
    }
    
    if (stack.length === 0) {
        this.group.delete(this.maxFreq);
        this.maxFreq--;
    }
    
    return val;
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */