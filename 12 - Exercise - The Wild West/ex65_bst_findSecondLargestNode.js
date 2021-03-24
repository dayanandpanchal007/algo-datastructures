

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

  findSecondLargest() {
    let prev = this.root;
    let current = this.root;

    while(current.right) {
      prev = current;
      current = current.right;
    }

    if (current.left !== null) {
      current = current.left;
      while(current.right) current = current.right;
      prev = current;
    }

    return prev.value;
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
console.log(`2nd largest: 13 === ${tree.findSecondLargest()}`);

/*
--------------------------------------------
              10
        5
--------------------------------------------
*/
let tree2 = new BinarySearchTree();
tree2.insert(10);
tree2.insert(5);
console.log(`2nd largest: 5 === ${tree2.findSecondLargest()}`);

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
console.log(`2nd largest: 19 === ${tree3.findSecondLargest()}`);

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
console.log(`2nd largest: 15 === ${tree4.findSecondLargest()}`);

let anotherTree = new BinarySearchTree();
anotherTree
.insert(15)
.insert(20)
.insert(10)
.insert(12)

console.log(`anotherTree.root.value: 15 === ${anotherTree.root.value}`);
console.log(`anotherTree.root.right.value: 20 === ${anotherTree.root.right.value}`);
console.log(`anotherTree.root.left.right.value: 12 === ${anotherTree.root.left.right.value}`);

