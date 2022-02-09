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

//let arr = ["(", "(", ")"];
let arr = ["(", "(", ")", ")", "(", ")", "(", "(", ")", ")", ")"];

for (let i = 0; i < arr.length; i++) {
  if (st.isEmpty()) {
    st.push(arr[i]);
  } else if (st.peek() != arr[i]) {
    st.pop();
  } else if (st.peek() == ")" && arr[i] == "(") {
    break;
  } else {
    st.push(arr[i]);
  }
}

if (!st.isEmpty()) {
  console.log("Not balanced");
} else {
  console.log("balanced");
}
