var count = 0;
function fun(str, out){
    if(str == ""){
        console.log(out);
        count++;
        return;
    }

    let ch = str[0];
    let restOfTheString = str.substring(1);
    fun(restOfTheString, out + ch);
    fun(restOfTheString, out);
}

fun("abc","");
console.log(count);