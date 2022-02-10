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

function stock(arr) {
  const st = new Stack();
  let day = 1;
  st.push(arr[0]);
  let ans = new Array(arr.length);
  ans[0] = 1;
  let a = 1;
  for (let i = 1; i < arr.length; i++) {
    if (!st.isEmpty() && arr[i] >= st.peek()) {
      ans[a] = day-1;
      st.pop();
    } else {
      ans[a] = 1;
    }
    st.push(arr[i]);
    day = day + 1;
    a++;
  }

  console.log(ans);
}

let arr = [100, 80, 60, 70, 60, 75, 85];

stock(arr);
