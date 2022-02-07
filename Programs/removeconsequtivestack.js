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
let arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5];

for (let i = 0; i < arr.length; i++) {
  if (st.isEmpty()) {
    st.push(arr[i]);
  } else if (st.peek() == arr[i]) {
    continue;
  } else {
    st.push(arr[i]);
  }
}

let ans = [];

while (!st.isEmpty()) {
  ans.push(st.pop());
}

for (let i = 0; i < ans.length; i++) {
  console.log(ans[i]);
}
