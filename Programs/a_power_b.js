function power(a,b){
    if(b == 0){
        return 1;
    }

    return a*power(a,b-1);
}

console.log(power(10,3));

//use the square method also