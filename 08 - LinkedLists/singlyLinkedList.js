/*
  Implement Singly Linked List
*/


class Node {
  constructor(data) {
    this.next = null;
    this.data = data;
  }
}

/**
 * @class SinglyLinkedList
 * 
 * Time Complexity
 * 
 * Insertion => O(1)
 * 
 * Removal => depends O(1) or O(n)
 * 
 * Searching => O(n)
 * 
 * Accessing => O(n)
 */
class SinglyLinkedList {
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

  push(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let currentNode = this.head;
    let prevNode = currentNode;

    while (currentNode.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return currentNode;
    }

    this.tail = prevNode;
    this.tail.next = null;
    this.length--;
    return currentNode;
  }

  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = currentHead.next;
    if (this.length === 1) this.tail = null;
    this.length--;
    return currentHead;
  }

  unshift(data) {
    const newHead = new Node(data);
    if (!this.head) {
      this.head = newHead;
      this.tail = this.head;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }

  getData(index) {
    if (index < 0 || index >= this.length) return null;
    let currentNode = this.head;
    let i = 0;
    while (index !== i) {
      currentNode = currentNode.next;
      i++;
    }
    return currentNode;
  }

  setData(data, index) {
    const node = this.getData(index);
    if (node) {
      node.data = data;
      return true;
    }
    return false;
  }

  insert(data, index) {
    if (index < 0 || index > this.length) return null;

    if (index === 0) {
      this.unshift(data);
      return this.length;
    }

    if (index === this.length) {
      this.push(data);
      return this.length;
    }

    let newNode = new Node(data);

    let prevNode = this.getData(index-1);
    let nextNode = prevNode.next;
    newNode.next = nextNode;
    prevNode.next = newNode;
    
    this.length++;
    return this.length;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) {
      this.shift();
      return this.length;
    }
    if (index === this.length - 1) {
      this.pop();
      return this.length;
    }
    let prevNode = this.getData(index-1);
    let currentNode = prevNode.next;
    prevNode.next = currentNode.next;
    this.length--;
    return this.length;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

sll = new SinglyLinkedList();
sll.createLinkedList(['Daya', 'Daya Panchal', 'Dayanand Panchal', 'DP']);
