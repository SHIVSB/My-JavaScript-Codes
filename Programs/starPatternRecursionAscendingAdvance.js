let s = "* ";
function star(n,k){
    let sp = 4*(k+1 - s.length/2-n);
    let space ="";
    for(let i=0; i<sp; i++){
        space += " ";
    }
    if(n==1){
        console.log(s + space + s);
        return;
    }
    star(n-1,k);
    s += "* ";
    console.log(s + space + s);
}

star(5,5);