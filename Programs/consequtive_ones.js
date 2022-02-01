let str = "";
let x = 3
function count(n){
    if(n == 1){
        return 2;
    }else if(n == 2){
        return 3;
    }

    return count(n-1) + count(n-2);
}