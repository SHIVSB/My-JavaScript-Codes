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

function insertAtBottomIterative(st, element) {
  const secondary = new Stack();

  while (!st.isEmpty()) {
    secondary.push(st.pop());
  }

  st.push(element);
  while (!secondary.isEmpty()) {
    st.push(secondary.pop());
  }
}

function insertatBottomRecursive(st, element) {
  if (st.isEmpty()) {
    st.push(element);
    return;
  } else {
    const topElement = st.pop();
    insertatBottomRecursive(st, element);
    st.push(topElement);
  }
}

function reverse(st) {
  console.log(st.length);
  if (!st.isEmpty()) {
    let topElement = st.pop();
    reverse(st);

    insertatBottomRecursive(st, topElement);
  }
  return;
}

const st = new Stack();
st.push(1000);
st.push(900);
st.push(800);

reverse(st);

console.log(st.peek());
st.pop();
console.log(st.peek());
st.pop();
console.log(st.peek());
