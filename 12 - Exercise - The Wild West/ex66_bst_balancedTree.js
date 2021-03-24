
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
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }

  height(node) {
    if (node === null) return 0;
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  heightFromRoot() {
    return this.height(this.root);
  }

  isBalanced() {
    if (this.root === null) return null;
    if (this.root.left === null && this.root.right === null) return true;

    const leftTreeHeight = this.height(this.root.left);
    const rightTreeHeight = this.height(this.root.right);

    return Math.abs(leftTreeHeight - rightTreeHeight) < 2;
  }
}

/*
--------------------------------------------
              10
        5               13
    2       7        11       20
--------------------------------------------
*/
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(2);
tree.insert(7);
tree.insert(11);
tree.insert(20);
console.log(`height: 3 === ${tree.heightFromRoot()}`);
console.log(`isBalanced: true === ${tree.isBalanced()}`);

/*
--------------------------------------------
              10
        5
--------------------------------------------
*/
let tree2 = new BinarySearchTree();
tree2.insert(10);
tree2.insert(5);
console.log(`height: 2 === ${tree2.heightFromRoot()}`);
console.log(`isBalanced: true === ${tree2.isBalanced()}`);

/*
--------------------------------------------
              10
        5             20
                15
            13        18
                            19
--------------------------------------------
*/
let tree3 = new BinarySearchTree();
tree3.insert(10);
tree3.insert(5);
tree3.insert(20);
tree3.insert(15);
tree3.insert(13);
tree3.insert(18);
tree3.insert(19);
console.log(`height: 5 === ${tree3.heightFromRoot()}`);
console.log(`isBalanced: false === ${tree3.isBalanced()}`);

/*
--------------------------------------------
              10
        5             20
                15
            13
        11       14       
--------------------------------------------      
*/
let tree4 = new BinarySearchTree();
tree4.insert(10);
tree4.insert(5);
tree4.insert(20);
tree4.insert(15);
tree4.insert(13);
tree4.insert(11);
tree4.insert(14);
console.log(`height: 5 === ${tree4.heightFromRoot()}`);
console.log(`isBalanced: false === ${tree4.isBalanced()}`);

