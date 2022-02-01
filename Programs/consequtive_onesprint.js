function f(n, str){
    if(n == 0){
        console.log(str);
        return;
    }

    if(i > n) return;

    if(str[str.length - 1]){
        f(n,i+1,str+'0');
        f(n,i+1)
    }
}