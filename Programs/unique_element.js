let arr = [1,4,4,23,23,5,6,7,8,8,6,7]
let k = arr[0];

for(let i =1; i<arr.length; i++){
    k ^= arr[i];
}

console.log(k);