process.stdin.resume();//begin reading from stdin so the process does not exit
process.stdin.setEncoding('utf-8');//this will set allowed character set to be utf-8
 
let inputString = ""; // this will store the complete input in stdin and we will later process
let currentLine = 0;//this will maintain the curernt line of input we are in
 
process.stdin.on('data', function (userInput) {
    inputString = inputString + userInput;
});
 
process.stdin.on('end', function() { // ctrl + d ->as soon as user stops typing input
    inputString.trim();//remove the trailing and leading white spaces
    inputString = inputString.split("\n");//split the input string into an array of strings where each string is a line of input
    main();//call the main function
});
 
function readline() {//this function will read the input from stdin
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