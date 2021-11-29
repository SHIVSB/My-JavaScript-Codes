function solve(units) {
	//Write your code here
    console.log(units.length);
    let sum = 0;
    for(let i=1; i<=units.length; i++){
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