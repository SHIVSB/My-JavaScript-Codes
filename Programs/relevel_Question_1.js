//-------------DO NOT MODIFY THIS SECTION------------------------
let input = ''
process.stdin.on('data', data => input += data)
process.stdin.on('end', () => main(input))

function main(input) {
    let lines = input.trim().split('\n');
    console.log("working");
    let n = +lines[0];
    for(let i = 1; i <= n; i++) {
        let units = lines[i].split(' ').map(v => +v);
        console.log("working");
    	solve(units);
    }
}
//--------------------------------------------------------------- 

// 0 - 200                                                           3 per unit

// 201 - 400                                                         4.50 per unit

//  401 - 800                                                        6.50 per unit

// 801 - 1200                                                       7.00 per unit

//   > 1200                                                             8.00 per unit

function solve(units) {
	//Write your code here
    console.log(units.length);
    let sum = 0;
    for(let i=0; i<units.length; i++){
        if(units[i] <= 200){
            sum += units[i]*3;
        }else if(units[i] <= 400){
            sum += ((200)*3) +((units[i] - 200)*4.5);
        }else if(units[i]<800){
            sum += ((200)*3) +((200)*4.5) +(units[i] -400)*6.5;
        }else if(units[i]<1200){
            sum += ((200)*3) +((200)*4.5) +((400)*6.5) + ((units[i] - 800)*7);
        }else if(units[i] > 1200){
            sum += ((200)*3) +((200)*4.5) +((400)*6.5) + ((400)*7) + ((units[i] - 1200)*8);
        }
    }

    console.log(sum);
}

main(input);
