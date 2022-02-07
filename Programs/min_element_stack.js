class Stack {
  constructor() {
    this.top = 0;
    this.data = [];
  }

  push(element) {
    this.data[this.top] = element;
    this.top = this.top + 1;
  }

  isEmpty() {
    return this.top == 0;
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return undefined;
    }

    this.top = this.top - 1;
    return this.data.pop();
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return undefined;
    }

    return this.data[this.top - 1];
  }
}

const st = new Stack();

st.push(10)
st.push(1);
st.push(4);
st.push(3);
st.push(2);
