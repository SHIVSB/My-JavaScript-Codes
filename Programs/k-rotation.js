let arr = [1,2,3,4,5]
let start = 0;
let end =arr.length-1;
function rotate(arr,start,end){
    while(start<= end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

let k =3;

rotate(arr,start,end);
rotate(arr,0,k-1);
rotate(arr,k,end);
console.log(arr);