function countingosort(arr) {
  // for non negative
  let n = arr.length;
  let maxEl = Math.max(...arr); //wont work without destructuring
  let output = Array(n);
  let freq = Array(maxEl + 1).fill(0);

  //filling frequency array
  for (let i = 0; i < n; i++) {
    freq[arr[i]]++;
  }

  //create prefix sum of frequency array
  for (let i = 1; i < freq.length; i++) {
    freq[i] = freq[i] + freq[i - 1];
  }

  //fill the output array based on the crct idx of last occurence
  for (let i = 0; i < n; i++) {
    let currElement = arr[i];
    output[freq[currElement] - 1] = arr[i];
    freq[currElement] -= 1;
  }

  return output;
}

let arr = [1, 3, 4, 2, 1, 1, 3, 2];
let sortedarr = countingosort(arr);
console.log(sortedarr);
