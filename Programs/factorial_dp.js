let dp = Array(1001).fill(-1);

function factorial(n){
    if(n== 0 || n==1){
        return 1;
    }

    if(dp[n] != -1){
        return dp[n];
    }

    dp[n] = n*factorial(n-1);
    return dp[n];
}

console.log(factorial(100));