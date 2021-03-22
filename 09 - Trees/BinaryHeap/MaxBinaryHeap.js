
class MaxBinaryHeap {
  constructor(values = []) {
    this.values = values;
  }

  // child 1 (2n + 1)
  // child 2 (2n + 2)
  insert(value) {
    this.values.push(value);
    return this.bubbleUp();
  }

  // parent Math.floor((n-1)/2)
  bubbleUp() {
    let idx = this.values.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.values[parentIdx] > this.values[idx]) break;
      [this.values[parentIdx], this.values[idx]] = [this.values[idx], this.values[parentIdx]];
      idx = parentIdx;
    }
    return this.values;
  }

  
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return [max, JSON.stringify(this.values)];
  }

//                20
//          41            40
//      35       10  12        13
// 55 is popped
  bubbleDown() {
    let parentIdx = 0;
    let length = this.values.length;
    let parentValue = this.values[parentIdx];
    while (true) {
      let leftChildIdx = 2 * parentIdx + 1;
      let rightChildIdx = 2 * parentIdx + 2;
      let leftChild, rightChild, swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (parentValue < leftChild) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && parentValue < rightChild) ||
          (swap !== null && rightChild > leftChild )
          ) {
            swap = rightChildIdx;
          }
      }

      if (swap === null) break;
      [this.values[parentIdx], this.values[swap]] = [this.values[swap], this.values[parentIdx]];
      parentIdx = swap;
    }
  }
}

//              41
//       35           40
//  20      10    12      13

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(35);
heap.insert(40);
heap.insert(20);
heap.insert(10);
heap.insert(12);
heap.insert(13);
// [41, 35, 40, 20, 10, 12, 13]
console.log(heap.values);


//                55
//          41            40
//      35       10  12        13
//  20

heap.insert(55);
// [55, 41, 40, 35, 10, 12, 13, 20]
console.log(heap.values);
