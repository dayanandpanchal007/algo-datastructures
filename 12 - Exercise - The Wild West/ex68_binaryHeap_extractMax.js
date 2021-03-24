
class MaxBinaryHeap {

  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp(value);
  }

  bubbleUp(value) {
    let idx = this.values.length - 1;
    let parentIdx;

    while (idx > 0) {
      parentIdx = Math.floor((idx - 1) / 2);
      if (this.values[parentIdx] > value) break;
      [this.values[parentIdx], this.values[idx]] = [this.values[idx], this.values[parentIdx]];
      idx = parentIdx;
    }

    return this.values;
  }

  extractMax() {
    const max  = this.values[0];
    const last = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = last;
      this.bubbleDown();
    }
    return max;
  }

  bubbleDown() {
    let idx = 0;
    let length = this.values.length;
    let element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1, rightChildIdx = leftChildIdx + 1;
      let swap = null;
      let leftChild = this.values[leftChildIdx];
      let rightChild = this.values[rightChildIdx];

      if (leftChildIdx < length && leftChild > element) swap = leftChildIdx;

      if (rightChildIdx < length && (rightChild > (swap === null ? element : leftChild))) swap = rightChildIdx;

      if (swap === null) break;

      [this.values[idx], this.values[swap]] = [this.values[swap], this.values[idx]];
      idx = swap;
    }
  }
}

let binaryHeap = new MaxBinaryHeap();
binaryHeap.insert(1);
binaryHeap.insert(2);
binaryHeap.insert(3);
binaryHeap.insert(4);
binaryHeap.insert(5);
binaryHeap.insert(6);

console.log(`binaryHeap: [6,4,5,1,3,2] === [${binaryHeap.values}]`);

console.log(`extractMax: 6 === ${binaryHeap.extractMax()}`);
console.log(`extractMax: 5 === ${binaryHeap.extractMax()}`);
console.log(`extractMax: 4 === ${binaryHeap.extractMax()}`);
console.log(`extractMax: 3 === ${binaryHeap.extractMax()}`);
console.log(`extractMax: 2 === ${binaryHeap.extractMax()}`);
console.log(`extractMax: 1 === ${binaryHeap.extractMax()}`);
console.log(`extractMax: undefined === ${binaryHeap.extractMax()}`);
console.log(`extractMax: undefined === ${binaryHeap.extractMax()}`);
