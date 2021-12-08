function fun(r,c,n){
    if(r>n) return;
    if(c>r){
      process.stdin.write("\n");
      fun(r+1,1,n);
      return;
    }else{
      process.stdin.write("* ");
      fun(r,c+1,n);
    }
  }
  fun(1,1,2);