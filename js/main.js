/*----- constants -----*/
const winPattern = [
    [1, 2, 3],
    [1, 5, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 5, 7],
    [3, 6, 9],
    [4, 5, 6],
    [7, 8, 9]
];
const gameDrawMove = 10; //when turn hits this number, declare draw
let turn = 1;
let xBoxes = [];
let oBoxes = [];


/*----- app's state (variables) -----*/

/*----- cached element references -----*/
const message = document.getElementById('message');
const winner = document.getElementById('winner');

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
    turn++;
    console.log(turn);
    if (turn >= gameDrawMove) {
        message.textContent = "Draw! Want to play again?";
        return;
    }
    let t = event.target;
    console.log("Cell ID: " + t.id); // ==> cell number
    if (turn % 2 === 0) {
        message.textContent = "Player O's turn";
        t.innerHTML = "X";
        t.style.backgroundColor = 'red';
        xBoxes.push(t.id);
        console.log("xBoxes: " + xBoxes);
    }
    if (turn % 2 === 1) {
        message.textContent = "Player X's turn";
        t.innerHTML = "O";
        t.style.backgroundColor = 'yellow';
        oBoxes.push(t.id);
        console.log("oBoxes: " + oBoxes);
    }
    for (let i = 0; i < winPattern.length; i++) {
        if (xBoxes.includes(winPattern[i][0]) && xBoxes.includes(winPattern[i][1]) && xBoxes.includes(winPattern[i][2])) {
            winner.textContent = 'Player X wins';
            console.log(winner);
        }
        if (oBoxes.includes(winPattern[i][0]) && oBoxes.includes(winPattern[i][1]) && oBoxes.includes(winPattern[i][2])) {
            winner.textContent = 'Player O wins';
            console.log(winner);
        }
    }
}
//call functions
// init();