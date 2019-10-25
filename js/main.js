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

/*----- app's state (variables) -----*/

/*----- cached element references -----*/

/*----- event listeners -----*/
function render() {
//check win
    document.getElementById('board').addEventListener('click', (event) => {
        let message = document.getElementById('message');
        let t = event.target;
        if (turn >= gameDrawMove) {
            //Game over, you drew
            message.textContent = 'Draw! Play again?';
        }
        else if (turn % 2  ===   0) {
            message.textContent = "Player O's turn";
            t.innerHTML = "X";
        }
        else if (turn % 2 === 1) {
            message.textContent = "Player X's turn";
            t.innerHTML = "O";
        }
        turn++; //add to turn so eventlistener works
    });
    //if xWinCheck or oWinCheck > 3    
        //for winPattern[i] 
            //if xBoxes = winPattern[i] 
                //x win
            // if oBoxes = winPattern[i]
                //o win
} //end of checkWin();

/*----- functions -----*/         
function init() {
    
} //end of init function

//call functions
init();
render();