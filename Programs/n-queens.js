function isSafe(row, col, n, visited){
    for(let i=row-1; i>=0; i--){
        if(visited[i][col] == true){
            return false;
        }
    }
    for(let i=row-1, j = col -1; i>=0 && j>=0; i--, j--){
        if(visited[i][j] == true){
            return false;
        }
    }
    for(let i=row-1, j = col +1; i>=0 && j<n; i--, j++){
        if(visited[i][j] == true){
            return false;
        }
    }

    return true;
}


function queen(row, n,visited){
    if(row == n){
        return 1;
    }
    let result = 0;

    for(let col = 0; col<n; col++){
        if(isSafe(row,col, n,visited)){
            visited[row][col] = true;
            result += queen(row+1,n,visited);
            visited[row][col] = false;
        }
    }

    return result;
}


let visited = [[false,false,false,false],
[false,false,false,false],
[false,false,false,false],
[false,false,false,false]];

let n = 4;

console.log(queen(0,4,visited));