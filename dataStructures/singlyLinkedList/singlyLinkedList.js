class Node{
  constructor(val) {
    this.val = val;
    this.next = null;
  }
};

let first = new Node('HELLO');
first.next = new Node ('HOW');
first.next.next = new Node ('ARE');
first.next.next.next = new Node ('YOU');