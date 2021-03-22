
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    while(current) {
      if (current.value === value) return true;
      if (value < current.value) current = current.left;
      if (value > current.value) current = current.right;
    }
    return false;
  }

  bfs() {
    if (this.root === null) return [];
    let node = this.root, queue = [], visited = [];
    queue.push(node);
    while(queue.length) {
      node = queue.shift();
      visited.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visited;
  }

  dfsPreOrder() {
    if (this.root === null) return [];
    let visited = [];
    
    function traverse(current) {
      visited.push(current.value);
      current.left && traverse(current.left);
      current.right && traverse(current.right);
    }

    traverse(this.root);
    return visited;
  }

  dfsPostOrder() {
    if (this.root === null) return [];
    let visited = [];
    
    function traverse(current) {
      current.left && traverse(current.left);
      current.right && traverse(current.right);
      visited.push(current.value);
    }

    traverse(this.root);
    return visited;
  }

  dfsInOrder() {
    if (this.root === null) return [];
    let visited = [];
    
    function traverse(current) {
      current.left && traverse(current.left);
      visited.push(current.value);
      current.right && traverse(current.right);
    }

    traverse(this.root);
    return visited;
  }
}

