
class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}


class PriorityQueue {
  constructor(values = []) {
    this.values = values;
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    return this.bubbleUp();
  }

  // parent Math.floor((n-1)/2)
  bubbleUp() {
    let idx = this.values.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.values[parentIdx].priority <= this.values[idx].priority) break;
      [this.values[parentIdx], this.values[idx]] = [this.values[idx], this.values[parentIdx]];
      idx = parentIdx;
    }
    return this.values;
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return [min && min.value, JSON.stringify(this.values)];
  }

  bubbleDown() {
    let parentIdx = 0;
    let length = this.values.length;
    let parent = this.values[parentIdx];
    while (true) {
      let leftChildIdx = 2 * parentIdx + 1;
      let rightChildIdx = 2 * parentIdx + 2;
      let leftChild, rightChild, swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (parent.priority > leftChild.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && parent.priority > rightChild.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
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

/*
  low fever => 4
  common cold => 3
  normal checkup => 6
  minor accident => 2
  brain damage => 1
  routine checkup => 5
*/

let patients = new PriorityQueue();
patients.enqueue('low fever', 4);
patients.enqueue('common cold', 3);
patients.enqueue('normal checkup', 6);
patients.enqueue('minor accident', 2);
patients.enqueue('brain damage', 1);
patients.enqueue('routine checkup', 5);
