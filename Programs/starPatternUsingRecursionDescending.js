var s = "* * * * * ";

function star(n){
    if(n==1){
        console.log(s);
        return;
    }
    console.log(s);
    s = s.substring(2);
    star(n-1);
}

star(5);