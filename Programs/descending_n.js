function fun(n){
    if(n==1){
        console.log("1");
        return;
    }
    console.log(n);
    fun(n-1);
}
fun(4);