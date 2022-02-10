class deque {
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

  addBack(element) {
    this.data[this.rear] = element;
    this.rear = this.rear + 1;
  }

  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    }
    if (this.front == 0) {
      let arr = new Array(2 * (this.rear - this.front));
      let i = arr.length - 1;
      let j = this.rear;

      while (j >= this.front) {
        arr[i] = this.data[j];
        i--;
        j--;
      }
      this.front = i;
      this.rear = arr.length;
      this.data = arr;
      this.data[this.front] = element;
    } else {
      this.front--;
      this.data[this.front] = element;
    }
  }

  removeFront() {
    if (this.isEmpty()) {
      let temp = this.data[this.front];
      this.front++;
      return temp;
    }
  }

  removeBack() {
    if (this.isEmpty) {
      console.log("Deque is empty");
      return;
    }

    let temp = this.data[this.rear - 1];
    this.rear--;
    return temp;
  }

  getFront() {
    if (!this.isEmpty()) {
      return this.data[this.front];
    }else{
        return undefined;
    }
  }
}

const deq = new deque();
deq.addBack(10);
deq.addBack(20);
deq.addFront(30);
console.log(deq.getFront());
console.log(deq);
