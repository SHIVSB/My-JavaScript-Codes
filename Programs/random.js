let n = 4;
let spaces;
    
for(let i =1; i<=n; i++){
  spaces = n-i;
  let result = "";
  for(let j=0; j<spaces; j++){
    result += "  ";
  }
  for(let k=0; k<i; k++){
    result += k+1 + " ";
  }
  for(let z=i-1; z>0; z--){
    result += z + " ";
  }
  console.log(result);
}