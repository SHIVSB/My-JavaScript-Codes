var s = "* * * * * ";


function star(n,k){
    var sp = 4*(k - (s.length/2));
    var space = "";
    for(let i=0; i<sp; i++){
        space += " ";
    }
    if(n == 1){
        console.log(s + space + s);
        return;
    }
    console.log(s + space + s);
    s =s.substring(2);
    star(n-1,k);
}

star(5,5);
