let y =10;

function fun(){
    let x = 10;
}

function run(){
    function gun(){
        let y = 10;
        console.log(x);
        if(true){
            let x = 20;
            console.log(y);
        }
    }

    gun();
    console.log(x);
}