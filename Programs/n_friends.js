function fun(n){
    if(n==1){
        return 1;
    }else if(n==2){
        return 2;
    }

    return fun(n-1) + (n-1)*fun(n-2);
}