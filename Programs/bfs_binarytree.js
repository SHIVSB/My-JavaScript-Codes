class Queue {
  constructor() {
    this.data = [];
    this.rear = 0;
    this.front = 0;
  }

  length() {
    return this.rear - this.front;
  }

  isEmpty() {
    return this.length == 0;
  }

  enqueue(element) {
    this.data[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    if (!this.isEmpty()) {
      let temp = this.data[this.front];

      this.front++;
      return temp;
    }
  }

  getFront() {
    if (!this.isEmpty()) {
      return this.data[this.front];
    } else {
      return undefined;
    }
  }
}

class node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// function bfs(root) {
//   if (root == null) {
//     return;
//   }
//   let q = new Queue();
//   q.enqueue(root);

//   while (!q.isEmpty()) {
//     let current = q.dequeue();
//     console.log(current);

//     if (current.left != null) {
//       q.enqueue(current.left);
//     }
//     if (current.right != null) {
//       q.enqueue(current.right);
//     }
//   }
// }

let root = new node(1);
root.left = new node(2);
root.right = new node(2);
root.left.left = new node(3);
root.left.right = new node(4);
root.right.left = new node(4);
root.right.right = new node(3);

// bfs(root);
