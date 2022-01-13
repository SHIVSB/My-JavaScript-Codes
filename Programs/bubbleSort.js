function bubblesort(arr){
    for(let i = 0; i < arr.length; i++){
        let is_swapped = false;
        for(let j = 0; j < arr.length -1 - i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                is_swapped = true;
            }
        }

        if(!is_swapped){
            break;
        }
    }
}

let arr = [5,4,3,1,2];
bubblesort(arr);
console.log(arr);

