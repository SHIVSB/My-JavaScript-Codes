process.stdin.resume();
process.stdin.setEncoding('utf-8');
 
let inputString = "";
let currentLine = 0;
 
process.stdin.on('data', function (userInput) {
    inputString = inputString + userInput;
});
 
process.stdin.on('end', function() { // ctrl + d
    inputString.trim();
    inputString = inputString.split("\n");
    main();
});
 
function readline() {
    let result = inputString[currentLine];
    currentLine = currentLine + 1;
    return result;
}
 
function processArray(arr) {
    let temp = arr.split(" "); //[1 2 3 4 5]
    let result = [];//new result array
    for(let i = 0; i < temp.length; i++) {
        result.push(Number(temp[i])); // [] ->[1] -> [1,2] -> [1,2,3]
    }
    return result;
}
 
function main() {
 
    let t = Number(readline()); // 1
    while(t > 0) {
        let n = Number(readline());
        let arr = readline();
        arr = processArray(arr);
        let k = Number(readline());
        console.log("length of array is ", n);
        console.log(typeof arr);
        console.log("k is ", k);
        t = t - 1;
    }
}