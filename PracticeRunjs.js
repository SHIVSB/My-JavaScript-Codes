// const canDrink = numbers.filter(n => n >= 21);

// const items = canDrink.map(n=> '<li>' + n + '</li>')

// console.log(items)

//Bubble Sort

// for(let i=0; i<numbers.length-1; i++){
//   for(let j=0; j<numbers.length-i-1; j++){
//     if(numbers[j]>numbers[j+1]){
//       let a = numbers[j+1];
//       numbers[j+1] = numbers[j];
//       numbers[j] = a;
//     }
//   }
// }

//Sorting using inbuilt sort function
//console.log(numbers.sort());

//Selection Sort
// for(let i=0; i<numbers.length-1;i++){
//   let min_idx = i;
//   for(let j=i+1;j<numbers.length;j++){
//     if(numbers[j] < numbers[min_idx]){
//       min_idx = j;
//     }
//   }
//   let a = numbers[min_idx];
//   numbers[min_idx] = numbers[i];
//   numbers[i] = a;
// }

// console.log(numbers);

//Binary Search

//Find the position of -1
// let l=0;
// let h=numbers.length-1;
// let binarySearch = function(numbers,l,h){
  
//   if(l>h){
//     Console.log("Nope");
//     return;
//   }
//   let mid = Math.floor((h+l)/2);
//   if(numbers[mid] === 5){
//     console.log(mid);
//     return;
//   }
//   if(numbers[mid] > 5){
//     h = mid-1;
//     binarySearch(numbers,l,h);
//   }else if(numbers[mid] < 5){
//     l=mid+1;
//     binarySearch(numbers,l,h);
//   }
// };

// binarySearch(numbers,0,numbers.length-1);

// console.log(numbers);
// numbers.sort()


//Using compare function with sort and object
// let people = [
//   {
//     name : "Apple",
//     age : 12
//   },
//   {
//     name : "Mango",
//     age : 9
//   },{
//     name : "Banana",
//     age : 7
//   }
// ]

// const sorted = function(a,b){
//   return a.age-b.age;
// }

// people.sort(sorted)

//Applying sorting on a string array
// arr = ["mango","banana","apple"];
// arr.sort();
// newarr = [];
// for(let i=0; i<arr.length; i++)
// {
//   newarr.push(arr[i].toUpperCase());
// }

// console.log(newarr);
// newarr.sort();
// const numbers = [1,34,2,-1,5,4,1,10];
// console.log(numbers)
// numbers.sort()

// const num = [5,1,2,2,1]

// for(let i=0; i<num.length-1; i++){
//   for(let j=i+1; j<num.length; j++){
//     if(num[i] == num[j]){
//       num[i] = -100000;
//       num[j] = -100000;
//     }
//   }
// }

// for(let i=0; i<num.length; i++){
//   if(num[i] != -100000){
//     console.log(num[i]);
//   }
// }

// let n = 4;
// let spaces;
    
// for(let i =1; i<=n; i++){
//   spaces = n-i;
//   let result = "";
//   for(let j=0; j<spaces; j++){
//     result += "  ";
//   }
//   for(let k=0; k<i; k++){
//     result += k+1 + " ";
//   }
//   for(let z=i-1; z>0; z--){
//     result += z + " ";
//   }
//   console.log(result);
// }

const arr1 = 'jimmy'.split();
const arr2 = arr1.slice(0,5);
console.log(arr2);


