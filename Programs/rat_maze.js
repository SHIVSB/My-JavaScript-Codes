let n = 7;
let grid = [[0 ,0 ,1 ,0 ,0 ,1 ,0],
 [1 ,0 ,1 ,1 ,0 ,0 ,0],
  [0 ,0 ,0 ,0 ,1 ,0 ,1],
   [1 ,0 ,1 ,0 ,0 ,0 ,0],
    [1 ,0 ,1 ,1 ,0 ,1 ,0],
    [1 ,0 ,0 ,0 ,0 ,1 ,0],
  [1 ,1 ,1 ,1 ,0 ,0 ,0]] 

let visited = [];
for(let i=0; i<n; i++){
    visited.push(Array(n).fill(false));
}

function fun(x,y){
    if(x <0 || y<0 || x>=n || y>= n){
        return 0;
    }

    if(grid[x][y] == 1){
        return 0;
    }
    if(visited[x][y] == true){
        return 0;
    }
    if(x == n-1 && y ==n-1){
        return 1;
    }

    visited[x][y] = true;
    let down = fun(x+1,y);
    let up = fun(x-1,y);
    let right = fun(x,y+1);
    let left = fun(x,y-1);
    visited[x][y] = false;
    return up + left + right + down;
}

console.log(fun(0,0));