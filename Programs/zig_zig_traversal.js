/**
 * Printing the array diagnols
 * 
 */

function diagonal(arr){
    /**
     * Write the logic to pass the code
     */
     let r = arr.length; // Row length
     let c = arr[0].length; //Column Length

    /**
     * First take care of the first column
     * pick each element of first column and print above diagonal
     */
    for(let k=0; k<r; k++){ // Iterating over the column
        console.log(arr[k][0] + ' ');

        /**
         * I need to print the element of the diagonal whose strating point is arr[k][0]
         */

        var i=k-1; // Row above it
        var j = 1; // Next Column

        while(isValid(i,j,arr)){
            console.log(arr[i][j] + ' ');
            i--; // Moving up
            j++; // Moving right
        }
        console.log("");
    }

    /**
    * Take care of the last row
    */

     for(let k=1; k<c;k++){
        console.log(arr[r-1][k] + ' ');
        /**
         * Need to print the elements of the diagonals
         */
        var i = r-2;
        var j = k+1;
        while(isValid(i,j,arr)){
            console.log(arr[i][j] + ' ');
            i--;
            j++;
        }
        console.log("");
    }

}



/**
 * 
 * // This function tries to check if i and j are 
 * valid index - true else false
 * 
 */

function isValid(i,j,arr){ 
    return !(i<0 || i >arr.length || j>arr[0].length || j<0);
}


/**
 * Test Code
 */
let arr = 
[[1,2,3,4,5,6],
 [7,8,9,10,11,12],
 [13,14,15,16,17,18],
 [19,20,21,22,23,24],
 [25,26,27,28,29,30],
 [31,32,33,34,35,36]]; //This is called test driven development


 diagonal(arr);