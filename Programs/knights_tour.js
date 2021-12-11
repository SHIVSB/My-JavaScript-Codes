let n = 5;
let visited = [];
for(let i=0; i<n; i++){
    visited.push(Array(n).fill(false));
}

function knight(x,y,count){
    if(x<0 || y<0 || x>=n || y>= n){
        return false;
    }
    if(visited[x][y]){
        return false;
    }

    if(count == n*n){
        return true;
    }

    visited[x][y] = true;
    let a = knight(x+2, y+1,count+1);
    let b = knight(x+2, y-1,count+1);
    let c = knight(x-2, y-1,count+1);
    let d = knight(x-2, y+1,count+1);
    let e = knight(x+1,y+2, count+1);
    let f = knight(x-1,y+2, count+1);
    let g = knight(x-1,y-2, count+1);
    let h = knight(x+1,y-2, count+1);
    visited[x][y] = false;

    return a || b || c || d || e || f || g || h;
}
let flag = false;
for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        let visited = [];
    for(let k=0; k<n; k++){
        visited.push(Array(n).fill(false));
    }
        if(knight(i,j,1) == true){
            console.log("true");
            flag = true;
            break;
        }
    }
    if(flag){
        break;
    }
}