var MedianFinder = function() {
    this.maxHeap = new MyHeap((a, b) => b - a); 
    this.minHeap = new MyHeap((a, b) => a - b); 
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.maxHeap.size() === 0 || num <= this.maxHeap.peek()) {
        this.maxHeap.push(num);
    } else {
        this.minHeap.push(num);
    }

    if (this.maxHeap.size() > this.minHeap.size() + 1) {
        this.minHeap.push(this.maxHeap.pop());
    } else if (this.minHeap.size() > this.maxHeap.size()) {
        this.maxHeap.push(this.minHeap.pop());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.maxHeap.size() === this.minHeap.size()) {
        return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
    } else {
        return this.maxHeap.peek();
    }
};

class MyHeap {
    constructor(comparator) {
        this.heap = [];
        this.comparator = comparator;
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0] || null;
    }

    push(val) {
        this.heap.push(val);
        this._siftUp(this.heap.length - 1);
    }

    pop() {
        if (this.size() === 0) return null;
        const top = this.heap[0];
        const last = this.heap.pop();
        if (this.size() > 0) {
            this.heap[0] = last;
            this._siftDown(0);
        }
        return top;
    }

    _siftUp(i) {
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.comparator(this.heap[i], this.heap[parent]) < 0) {
                [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
                i = parent;
            } else {
                break;
            }
        }
    }

    _siftDown(i) {
        const n = this.size();
        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallest = i;
            if (left < n && this.comparator(this.heap[left], this.heap[smallest]) < 0) {
                smallest = left;
            }
            if (right < n && this.comparator(this.heap[right], this.heap[smallest]) < 0) {
                smallest = right;
            }
            if (smallest !== i) {
                [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
                i = smallest;
            } else {
                break;
            }
        }
    }
}