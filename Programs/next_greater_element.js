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

function nextSmaller(arr) {
  const st = new Stack();

  st.push(0);

  let output = new Array(arr.length);

  for (let i = 1; i < arr.length; i++) {
    while (!st.isEmpty() && arr[st.peek()] > arr[i]) {
      output[st.peek()] = arr[i];
      st.pop();
    }
    st.push(i);
  }

  while (!st.isEmpty()) {
    output[st.peek()] = -1;
    st.pop();
  }

  return output;
}

function prevSmaller(arr) {
    // Create a stack and push
    // index of first element
    // to it
    let st = new Stack();
    st.push(0);
  
    let output = new Array(arr.length);
    output.push(-1);
    for (let i = 1; i < arr.length; i++) {
      while (!st.isEmpty() && st.peek() > arr[i]) st.pop();
  
      if (st.isEmpty()) output.push(-1);
      else output.push(st.peek());
  
      st.push(arr[i]);
    }
  
    return output;
  }


function prevGreater(arr) {
  // Create a stack and push
  // index of first element
  // to it
  let st = new Stack();
  st.push(0);

  let output = new Array(arr.length);
  output.push(-1);
  for (let i = 1; i < arr.length; i++) {
    while (!st.isEmpty() && st.peek() < arr[i]) st.pop();

    if (st.isEmpty()) output.push(-1);
    else output.push(st.peek());

    st.push(arr[i]);
  }

  return output;
}

function nextGreater(arr) {
  const st = new Stack();

  st.push(0);

  let output = new Array(arr.length);

  for (let i = 1; i < arr.length; i++) {
    while (!st.isEmpty() && arr[st.peek()] < arr[i]) {
      output[st.peek()] = arr[i];
      st.pop();
    }
    st.push(i);
  }

  while (!st.isEmpty()) {
    output[st.peek()] = -1;
    st.pop();
  }

  return output;
}

//find sum of minimums of all possble subarrays of the array
// function minSubarray(arr){
//     let psi = 
//     let nsi = 
// }

var arr = [2, 7, 3, 5, 4, 6, 8, 0];

prevGreater(arr);
console.log(nextGreater(arr));
