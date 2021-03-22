/*
  Implement Doubly linked list
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  createLinkedList(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.push(arr[i]);
    }
    return this;
  }

  push(val) {
    const node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return null;
    const deletedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return deletedNode;
    }
    this.tail = deletedNode.prev;
    this.tail.next = null;
    deletedNode.prev = null;
    this.length--;
    return deletedNode;
  }

  shift() {
    if (this.length === 0) return null;
    const deletedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return deletedNode;
    }
    this.head = deletedNode.next;
    this.head.prev = null;
    deletedNode.next = null;
    this.length--;
    return deletedNode;
  }

  unshift(val) {
    if (this.length === 0) this.push(val);
    const node = new Node(val);
  }
}

dll = new DoublyLinkedList();
dll.createLinkedList([10, 20, 30, 40]);
