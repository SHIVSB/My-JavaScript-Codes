let s = "abpiiababpiabpabpi";

function pi(s,out){
    if(s.length == 1 || s == ""){
        console.log(out)
        return;
    }
    if(s[0] == "p" && s[1] == "i"){
        out += "3.14";
        s = s.substring(1);
    }else{
         out += s[0];        
    }

    let rots = s.substring(1);
    pi(rots,out);
}

var out = "";
pi(s,out);
console.log(out);