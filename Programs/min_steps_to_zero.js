function minSteps(n){
    if(n <= 9) return 1;
    var str = "" + n;
    let noOfdigits = str.length;
    let ans = Number.MAX_SAFE_INTEGER;
    
    for(let i = 0; i < noOfdigits; i++){
        let currDigit = str[i] - '0';
        if(currDigit == 0) continue;
        ans = Math.min(ans, minSteps(n - currDigit));
    }

    return 1 + ans;
}

console.log(minSteps(342));