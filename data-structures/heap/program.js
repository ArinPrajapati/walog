class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex] > this.heap[index]) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  remove() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return root;
  }

  heapifyDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      let rightChildIndex = this.getRightChildIndex(index);
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[smallerChildIndex]
      ) {
        smallerChildIndex = rightChildIndex;
      }
      if (this.heap[index] > this.heap[smallerChildIndex]) {
        this.swap(index, smallerChildIndex);
        index = smallerChildIndex;
      } else {
        break;
      }
    }
  }

  peek() {
    return this.heap.length === 0 ? null : this.heap[0];
  }
}

// Example usage:
const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(8);

console.log(minHeap.peek()); // Output: 3
console.log(minHeap.remove()); // Output: 3
console.log(minHeap.peek()); // Output: 5
