
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = new Node(value);
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = new Node(value);
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  DFSPreOrder() {
    let values = [];
    function traverse(node) {
      if (node === null) return;
      values.push(node.value);
      traverse(node.left);
      traverse(node.right);
    }
    traverse(this.root);
    return values;
  }

  DFSInOrder() {
    let values = [];
    function traverse(node) {
        if (node === null) return;
        
        traverse(node.left);
        values.push(node.value);
        traverse(node.right);
    }
    traverse(this.root);
    return values;
  }

  DFSPostOrder() {
    let values = [];
    function traverse(node) {
      if (node === null) return;
      traverse(node.left);
      traverse(node.right);
      values.push(node.value);
    }
    traverse(this.root);
    return values;
  }
}

