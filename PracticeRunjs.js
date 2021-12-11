//narscisstic number

let n = 10000;

for(let i=0; i<=n; i++){
  let s = "" + i;
  let num_length = s.length;
  let temp = i;
  let sum = 0;
  while(temp>0){
    sum += Math.pow(temp%10,num_length);
    temp = Math.floor(temp/10);
  }
  
  if(sum == i){
    console.log(i);
  }
}


