let s = "NayaN";
let c = "";

//N iterations
for(let i=0;i<s.length; i++){
    c += s[s.length-1-i];
}
console.log(c);
if(c == s){
    console.log("Pallindrome");
}else{
    console.log("Not a Pallindrome");
}

//N/2 iterations
let a =0;
for(let i=0; i<s.length/2; i++){
    if(s[i] != s[s.length - 1 -i]){
        console.log("Not a pallindrome");
        a++;
    }
}
if(a==0){
    console.log("Pallindrome");
}