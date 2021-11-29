let arr = [1,2,3,4,5,6,7,8,9,10];
let target = 8;

let i =0, j = arr.length - 1;

while(i<j){
    if(arr[i] + arr[j] == target){
        console.log(arr[i], arr[j]);
        i++;
        j--;
    }else if(arr[i] + arr[j] < target){
        i++;
    }else if(arr[i] + arr[j] > target){
        j--;
    }
}