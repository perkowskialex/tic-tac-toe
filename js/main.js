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
let xWinCheck = 0; 
let oWinCheck = 0;
const gameDrawMove = 10; //when turn hits this number, declare draw
let turn = 1; 


/*----- app's state (variables) -----*/

/*----- cached element references -----*/
const message = document.getElementById('message');

/*----- event listeners -----*/
// document.querySelector('board')
//   .addEventListener('click', handleClick);
let board1 = document.querySelectorAll('.cell')
    // .addEventListener('click');
    board1.forEach(element => {
        // console.log(element)
        element.addEventListener('click', handleClick);
    });
    // console.log();
// replayBtn.addEventListener('click', init); EVENTUALLY WE WILL ADD THIS


/*----- functions -----*/   
function handleClick(event) {
        let xBoxes = [];
        let oBoxes = [];
        turn++;
        console.log(turn);
        if (turn > gameDrawMove) {
            message.textContent = "Draw! Want to play again?";
            return;
        }
        let t = event.target;
        console.log("Cell ID: "+t.id); // ==> cell number
        if (turn % 2  ===   0) {
            message.textContent = "Player O's turn";
            t.innerHTML = "X";
            t.style.backgroundColor='red';
            xWinCheck++;
            console.log("xWinCheck = "+xWinCheck);
            xBoxes.push(t.id);
            console.log("xBoxes: " + xBoxes);
        }
        if (turn % 2 === 1) {
            message.textContent = "Player X's turn";
            t.innerHTML = "O";
            t.style.backgroundColor='yellow';
            oWinCheck++;
            console.log("oWinCheck = "+oWinCheck);
            oBoxes.push(t.id);
            console.log("oBoxes: " + oBoxes);
        }
    }

function init() {
    render(); 
} //end of init function

function render() {
    if (turn >= gameDrawMove) {
        //Game over, you drew
        message.textContent = 'Draw! Play again?';
    }
    if (xWinCheck > 3 || oWinCheck > 3) {
    winPattern.forEach(element, idx, function() {
        if (element[idx].includes(xBoxes)) {
            message.textContent = 'Player X won!'
        }
        if (element[idx].includes(oBoxes)) {
            message.textContent = 'Player O won!'
        }
        else {
            return;
        }
        });
    }

}

//call functions
// init();
// render();