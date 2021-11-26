let num = 10000;

for(let n =0; n<= num; n++){
  let str = "" + n;
  let num_digits = str.length;
  
  let sum =0;
  let temp = n;
  while(temp > 0){
    sum += Math.pow(temp%10, num_digits);
    temp = Math.floor(temp/10);
  }

  if(sum == n){
      console.log(n);
  }
}