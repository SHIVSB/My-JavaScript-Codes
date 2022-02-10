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

function reverseQueue(queue) {
  let arr = [];
  while (queue.length() > 0) {
    arr.push(queue.dequeue());
  }

  for (let i = arr.length-1; i >= 0; i--) {
    queue.enqueue(arr[i]);
  }
}
let q = new Queue();
q.enqueue(10);
q.enqueue(11);
q.enqueue(12);
q.enqueue(13);
q.enqueue(14);
console.log(q.getFront());
q.dequeue();
console.log(q.getFront());
reverseQueue(q);
console.log(q.getFront());
