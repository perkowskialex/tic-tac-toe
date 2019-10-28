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

/*----- app's state (variables) -----*/
let turn = 1;
let xBoxes = [];
let oBoxes = [];
let winPatternStr = [];
let xWin = false;
let oWin = false;

/*----- cached element references -----*/
const message = document.getElementById('message');
const board1 = document.querySelectorAll('.cell')
const resetBtn = document.getElementById('reset');

/*----- event listeners -----*/

board1.forEach(element => {
    // console.log(element)
    element.addEventListener('click', handleClick);
});

resetBtn.addEventListener('click',reset);

/*----- functions -----*/
function handleClick(event) {
    if (reset) {
       let turn = 1;
       let reset = false; 
    }
    turn++;
    let t = event.target;
    if (oWin || xWin) {
        console.log("No click - game is over");
        return; 
    }
    console.log('turn: ' + turn);
    console.log("Cell ID: " + t.id); // ==> cell number
    if (turn >= gameDrawMove) {
        message.textContent = "Draw! Want to play again?";
        return;
    }
    if ((turn % 2 === 0) && t.innerHTML!=='X' && t.innerHTML!=='O') {
        message.textContent = "O's turn";
        t.innerHTML = "X";
        t.style.backgroundColor = 'lightslategrey';
        xBoxes.push(t.id);
        console.log("xBoxes: " + xBoxes);
    }
    if ((turn % 2 === 1)  && t.innerHTML!=='X' && t.innerHTML!=='O') {
        message.textContent = "X's turn";
        t.innerHTML = "O";
        t.style.backgroundColor = 'lightslategrey';
        oBoxes.push(t.id);
        console.log("oBoxes: " + oBoxes);
    }
    checkWin();
}

function strings () {  //turn win pattern into sets of strings
    winPattern.forEach(function(element) {
        winPatternStr.push(element.join(''));
    });
    console.log('Win Strings are: '+winPatternStr);
}

function checkWin() {
    strings();
    //sort x 
    xBoxes.sort(function(a,b) {return a-b});
    let xStrings = xBoxes.join('');
    console.log("xStrings: "+xStrings);
    //sort o 
    oBoxes.sort(function(a,b) {return a-b});
    let oStrings = oBoxes.join('');
    console.log("oStrings: "+oStrings);
    winPatternStr.forEach(function(element) {
        if (xStrings.includes(element)) {
            message.textContent = 'X WINS!';
            xWin = true;
            return;
        }
        else if (oStrings.includes(element)) {
            message.textContent = 'O WINS';
            oWin = true;
            return;
        }
    });
}

function reset() {
    location.reload();
} 

//call functions?
// init();