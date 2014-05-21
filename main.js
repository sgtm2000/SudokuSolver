
var UNASSIGNED = 0;


var canPlaceNumber = function(board, number, row, col) {

    if(board[row][col] === UNASSIGNED) {
        for(var i = 0; i < 9; i++) { //check column
            if(board[row][i] === number) {
                return false;
            }
        }

        for(var j = 0; j < 9; j++) { //check row
            if(board[j][col] === number) {
                return false;
            }
        }

        var boxRowOffset = Math.floor(row/3) * 3;
        var boxColOffset = Math.floor(col/3) * 3;
        for(var k = 0; k < 3; ++k) { // box
            for(var m = 0; m < 3; m++) {
                if(number === board[boxRowOffset + k][boxColOffset + m]) {
                    return false;
                }
            }
        }
        return true;

    }

    return false;
};

var solve = function (board, row, col){

    if (row === 9){
        row = 0;
        col++;
        if (col === 9){
            return true;
        }
    }
    if (board[row][col] !== UNASSIGNED){
        return solve(board, row+1, col);
    }
    for (var number = 1; number <= 9; number++ ){

        if (canPlaceNumber(board, number, row, col)){

            board[row][col] = number;
            if (solve(board, row+1, col)){
                return true;
            }
            board[row][col] = UNASSIGNED;
        }
    }

    return false;

};

var board1 = [
    [ 3, 0, 6, 5, 0, 8, 4, 0, 0],
    [ 5, 2, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 8, 7, 0, 0, 0, 0, 3, 1 ],
    [ 0, 0, 3, 0, 1, 0, 0, 8, 0 ],
    [ 9, 0, 0, 8, 6, 3, 0, 0, 5 ],
    [ 0, 5, 0, 0, 9, 0, 6, 0, 0 ],
    [ 1, 3, 0, 0, 0, 0, 2, 5, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 7, 4 ],
    [ 0, 0, 5, 2, 0, 6, 3, 0, 0 ]
];

var board2 = [
    [ 0, 0, 0, 0, 0, 8, 0, 0, 4 ],
    [ 0, 8, 4, 0, 1, 6, 0, 0, 0 ],
    [ 0, 0, 0, 5, 0, 0, 1, 0, 0 ],
    [ 1, 0, 3, 8, 0, 0, 9, 0, 0 ],
    [ 6, 0, 8, 0, 0, 0, 4, 0, 3 ],
    [ 0, 0, 2, 0, 0, 9, 5, 0, 1 ],
    [ 0, 0, 7, 0, 0, 2, 0, 0, 0 ],
    [ 0, 0, 0, 7, 8, 0, 2, 6, 0 ],
    [ 2, 0, 0, 3, 0, 0, 0, 0, 0 ]
];

//Easy
var board3 = [
    [ 0, 0, 0, 2, 6, 0, 7, 0, 1 ],
    [ 6, 8, 0, 0, 7, 0, 0, 9, 0 ],
    [ 1, 9, 0, 0, 0, 4, 5, 0, 0 ],
    [ 8, 2, 0, 1, 0, 0, 0, 4, 0 ],
    [ 0, 0, 4, 6, 0, 2, 9, 0, 0 ],
    [ 0, 5, 0, 0, 0, 3, 0, 2, 8 ],
    [ 0, 0, 9, 3, 0, 0, 0, 7, 4 ],
    [ 0, 4, 0, 0, 5, 0, 0, 3, 6 ],
    [ 7, 0, 3, 0, 1, 8, 0, 0, 0 ]
];

//Difficult
var board4 = [
    [ 0, 2, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 6, 0, 0, 0, 0, 3 ],
    [ 0, 7, 4, 0, 8, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 3, 0, 0, 2 ],
    [ 0, 8, 0, 0, 4, 0, 0, 1, 0 ],
    [ 6, 0, 0, 5, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 1, 0, 7, 8, 0 ],
    [ 5, 0, 0, 0, 0, 9, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 4, 0 ]
];

console.log(board1);
solve(board1, 0, 0);
console.log(board1);

console.log(board2);
solve(board2, 0, 0);
console.log(board2);

console.log(board3);
solve(board3, 0, 0);
console.log(board3);

console.log(board4);
solve(board4, 0, 0);
console.log(board4);




