function fun(n){
    if(n==1){
        console.log("1");
        return;
    }
    fun(n-1);
    console.log(n);
}
fun(5);