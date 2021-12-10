var s = "* ";

function star(n){
    if(n==1){
        console.log(s);
        return;
    }
    star(n-1);
    s+="* ";
    console.log(s);
}

star(5);