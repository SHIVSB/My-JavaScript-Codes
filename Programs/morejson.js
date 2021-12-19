let numbers = [1,2,3,4,5,6,7];
/**
 * I want to store 1 in a, 2 in b and rest in c
 */
let [a,b, ...c] = numbers;

console.log(a);
console.log(b);
console.log(c);
