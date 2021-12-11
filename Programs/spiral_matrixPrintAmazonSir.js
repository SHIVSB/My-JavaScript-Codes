function spiralPrint(arr){
    let m =  arr.length;//Number of rows
    let n = arr[0].length;//Number of columns
    let r = 0; //starting row position
    let c =0; //starting column position
    let i=0; // This will be used to iterate

    /*
     *Logic to print spiral order 
     * 
     * loop1 = top row
     * loop2 = last coloumn
     * loop3 = last row
     * loop4 = first column
     * 
     */
    //I should continue till i have reached the end of row and column

    while(r<m && c<n){
        /**
         * print the top row
         * r -- all the columns till n-1
         */
        for(let i=c; i<n; i++){
            console.log(arr[r][i] + ' ');
        }
        r++;
        /**
         * print the last column
         */
        for(let i=r; i<m; i++){
            console.log(arr[i][n-1] + ' ');
        }
        n--;
        /**
         * print the last row
         */
        if(r<m)
        {for(let i=n-1;i>=c;i--){
            console.log(arr[m-1][i] + ' ');
        }
        m--;}
        /**
         * print first column
         */
        if(c<n)
        {for(let i=m-1; i>=r; i--){
            console.log(arr[i][c] + ' ');
        }
        c++;}
        
    }

}

let arr = [[1,2,3,4,5,6],
[7,8,9,10,11,12],
[13,14,15,16,17,18]];

spiralPrint(arr); //This should print the elements of the array in spiral order

