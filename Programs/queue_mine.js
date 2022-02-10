class Queue {
  constructor() {
    this.top = 0;
    this.data = [];
  }

  enqueue(element) {
    this.data[this.top] = element;
    this.top = this.top + 1;
  }

  enqueueFront(element) {
    this.data.unshift(element);
    this.top = this.top + 1;
  }

  isEmpty() {
    return this.top == 0;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return undefined;
    }

    return this.data.shift();
  }

  dequeueEnd(){
    if (this.isEmpty()) {
        console.log("Queue is empty");
        return undefined;
      }
  
      this.top = this.top - 1;
      return this.data.pop();
  }

  top() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return undefined;
    }

    return this.data[this.top - 1];
  }
}

const q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.data);
q.dequeue();
console.log(q.data);
console.log(q.data);
// q.dequeue();
// q.dequeue();
q.dequeueEnd()
console.log(q.data);
