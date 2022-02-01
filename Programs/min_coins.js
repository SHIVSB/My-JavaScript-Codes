let arr = [1,5,7];

let sum = 11;

function minCoin(n){
    if(n == 0){
        return 0;
    }

    let ans = Number.MAX_SAFE_INTEGER;

    for(let i = 0; i < arr.length; i++){
        if(n < arr[i]){
            continue;
        }
        ans = Math.min(ans, minCoin(n - arr[i]));
    }

    return 1 + ans;
}

console.log(minCoin(sum))
