let arr = [1,2,3,4,5];
//only 1 and 2 jump allowed

function cost(i){
    if(i == 0){
        return 0;
    }else if(i == 1){
        return arr[1] - arr[0];
    }

    return Math.min(cost(i-1)+ Math.abs(arr[i] - arr[i-1]), cost(i-2) + Math.abs(arr[i] - arr[i-2]));
}

console.log(cost(4));