
function palindrome(str, i){
    let n = str.length-1;
    if(i>=n/2){
        return true;
    }
    if(str[i] == str[n-i]){
        return palindrome(str, ++i);
    }else{
        console.log();
        return false;
    }
}
 
let str = "MOMMOM";
// console.log(str[0] == str[]);
console.log(palindrome(str, 0));