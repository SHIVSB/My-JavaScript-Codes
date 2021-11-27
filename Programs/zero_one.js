let arr = [0,0,1,1,1,0,1,0,1]
let j = arr.length - 1;
let i = 0;
while(i <j){
    if(arr[i] == 1){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j--;
    }else{
        i++;
    }
}
console.log(arr);
console.log(arr.sort());