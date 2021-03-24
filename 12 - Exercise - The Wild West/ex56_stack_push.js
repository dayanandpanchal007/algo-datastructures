
class Node{
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}

class Stack{
  constructor(){
    this.first = null;
    this.last = null;  
    this.size = 0;
  }
  push(val){
    const node = new Node(val, this.first);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.first = node;
    }
    return ++this.size;
  }
}

