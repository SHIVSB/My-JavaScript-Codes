function findMinIdx(arr, start){
    let min_idx = start;

    for(let i = start + 1; i < arr.length; i++){
        if(arr[i] < arr[min_idx]){
            min_idx = i;
        }
    }

    let temp = arr[start];
    arr[start] = arr[min_idx];
    arr[min_idx] = temp;
}

function selectionSort(arr){
    for(let i =0; i<arr.length; i++){
        findMinIdx(arr,i);
    }
}

let arr = [5,4,3,2,1];
selectionSort(arr);
console.log(arr);