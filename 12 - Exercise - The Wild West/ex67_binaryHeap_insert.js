
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
}

let binaryHeap = new MaxBinaryHeap();
binaryHeap.insert(1);
binaryHeap.insert(2);
binaryHeap.insert(3);
binaryHeap.insert(4);
binaryHeap.insert(5);
binaryHeap.insert(6);

console.log(`binaryHeap: [6,4,5,1,3,2] === [${binaryHeap.values}]`);
