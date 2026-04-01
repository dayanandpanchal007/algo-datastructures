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

  getMin(node) {
    while (node.left) node = node.left;
    return node.value;
  }

  remove(value) {
    const getMin = this.getMin;
    function deleteNode(node, value) {
      if (node === null) {
        node = null;
        return null;
      }
      if (value < node.value) {
        node.left = deleteNode(node.left, value);
        return node;
      } else if (value > node.value) {
        node.right = deleteNode(node.right, value);
        return node;
      } else {
        if (value !== node.value) return;
        if (node.left === null && node.right === null) {
          return null;
        }
        if (node.left === null) return node.right;
        if (node.right === null) return node.left;
        const minValue = getMin(node.right);
        node.value = minValue;
        node.right = deleteNode(node.right, minValue);
        return node;
      }
    }
    this.root = deleteNode(this.root, value);
  }
}

let bst = new BinarySearchTree();
bst.insert(15).insert(20).insert(10).insert(12).insert(1).insert(5).insert(50);
console.log(bst.DFSInOrder());
bst.remove(10);
console.log(bst.DFSInOrder());
