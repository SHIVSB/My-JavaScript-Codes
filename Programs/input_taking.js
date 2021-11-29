const readline = require('readline');

let reader = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let x = reader.question('',(ans)=>{
    console.log("Input by user is : ", ans);
    reader.close();
});

console.log("Input by user is : ", x);
