function insertionSort(arr){
    for(let i = 0; i< arr.length; i++){
        let current_element = arr[i];

        let j = i-1;
        while(j >= 0 && arr[j] > current_element){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current_element;
    }
}

let arr = [5,4,3,2,1];
insertionSort(arr);
console.log(arr);