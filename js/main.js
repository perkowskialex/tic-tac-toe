/*----- constants -----*/
const winPattern = [
    [1,2,3],
    [1,5,9],
    [1,4,7],
    [2,5,8],
    [3,5,7],
    [3,6,9],
    [4,5,6],
    [7,8,9]
];
const xBoxes = [];
const oBoxes = [];
const xWinCheck = 3; 
const oWinCheck = 3;
const turn = 1; 
const gameDrawMove = 10; //when turn hits this number, declare draw
const grid = 3;

/*----- app's state (variables) -----*/

/*----- cached element references -----*/

/*----- event listeners -----*/
function render() {
//check win
    document.getElementById("board").addEventListener('click', (event) => {
        let message = document.getElementById("message");
        if (turn >= gameDrawMove) {
            //Game over, you drew
            message.textContent = 'Draw! Play again?';
        }
        else if (turn % 2  ===   0) {
            message.textContent = "Player O's turn";
            event.target.innerHTML = "X";
        }
        else if (turn % 2 === 1) {
            message.textContent = "Player X's turn";
            event.target.innerHTML = "O";
        }
        turn++; //need to move turn up
    });
    //if xWinCheck or oWinCheck > 3    
        //for winPattern[i] 
            //if xBoxes = winPattern[i] 
                //x win
            // if oBoxes = winPattern[i]
                //o win
    // turn === gameDrawMove;
        //draw 
} //end of checkWin();

/*----- functions -----*/         
function init(grid) {
    let parent = document.getElementById("game");
    let board = document.createElement("board");
    let boxCount = 1;

    for (let i = 0; i < grid; i++) 
        {
        let row = document.createElement("boardRow");
        for (let x = 0; i < grid; x++) 
            {
            let column = document.createElement("boardColumn");
            column.id = boxCount;
            boxCount++;
            row.appendChild(column);
            }
        board.appendChild(row);
        }
    parent.appendChild(board);
} //end of init function

//call functions
init();
render();