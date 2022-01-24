let arr = [1,2,3,4,5];
let sum = 0;
let ans = Number.MAX_SAFE_INTEGER;

function cost(i, k){
    if(i == 0){
        return 0;
    }else if(i == 1){
        return Math.abs(arr[1] - arr[0]);
    }

    for(let j = 1; j <=k ; j++ ){
        if(i - j >=0){
            ans = Math.min(ans, (cost(i-j, k) + Math.abs(arr[i] - arr[i-j])));
        }
    }

    return ans;
}

let k = 1;
console.log(cost(arr.length-1, k));