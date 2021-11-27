arr = [1,2,1,0,1,2,1,0,0,2,1]
let l =0, mid =0, h = arr.length-1;

while(mid <= h){
    if(arr[mid] == 0){
        let temp = arr[mid];
        arr[mid] = arr[l];
        arr[l] = temp;
        l++;
        mid++;
    }else if(arr[mid] == 1){
        mid++;
    }else if(arr[mid] == 2){
        let temp = arr[mid];
        arr[mid] = arr[h];
        arr[h] = temp;
        h--;
    }
}

console.log(arr);