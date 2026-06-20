var MyCircularQueue = function(k) {
    this.queue = new Array(k);   // 存储元素的数组
    this.capacity = k;           // 队列容量
    this.front = 0;              // 队首指针，指向第一个元素
    this.rear = 0;               // 队尾指针，指向下一个插入位置
    this.count = 0;             // 当前元素个数
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) return false;
    this.queue[this.rear] = value;
    this.rear = (this.rear + 1) % this.capacity;
    this.count++;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) return false;
    this.front = (this.front + 1) % this.capacity;
    this.count--;
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (this.isEmpty()) return -1;
    return this.queue[this.front];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (this.isEmpty()) return -1;
    // 队尾元素在 rear 的前一个位置，因为 rear 指向下一个插入位置
    return this.queue[(this.rear - 1 + this.capacity) % this.capacity];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.count === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.count === this.capacity;
};