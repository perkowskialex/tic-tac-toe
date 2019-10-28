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
const gameDrawMove = 11; //when turn hits this number, declare draw

/*----- app's state (variables) -----*/
let turn = 1;
let xBoxes = [];
let oBoxes = [];
let winPatternStr = [];
let xWin = false;
let yWin = false;

/*----- cached element references -----*/
const message = document.getElementById('message');
const winner = document.getElementById('winner');

/*----- event listeners -----*/
let board1 = document.querySelectorAll('.cell')

board1.forEach(element => {
    // console.log(element)
    element.addEventListener('click', handleClick);
});


/*----- functions -----*/
function handleClick(event) {
    turn++;
    let t = event.target; 
    if (yWin || xWin) {
        console.log("No click - game is over");
        return; 
    }
    console.log('turn: ' + turn);
    console.log("Cell ID: " + t.id); // ==> cell number
    if (turn >= gameDrawMove) {
        message.textContent = "Draw! Want to play again?";
        return;
    }
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
    checkWin();
}

function strings () {
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
    console.log("o:"+oBoxes);
    winPatternStr.forEach(function(element) {
        if (xStrings.includes(element)) {
            winner.textContent = 'Player X wins!';
            xWin = true;
            return;
        }
        else if (oStrings.includes(element)) {
            winner.textContent = 'Player Y wins';
            yWin = true;
            return;
        }
    });
}
    // console.log("checkWin xBoxes:" + xBoxes);
    // console.log("checkWin oBoxes:"+ oBoxes)
    // for (i = 0; i < winPattern.length;  i++) {
    //     if (xBoxes === winPattern[i]) {
    //         winner.innerHTML = 'Player X wins';
    //         console.log(winner);
    //         return;
    //     }
    //     if ((xBoxes.includes(winPattern[i][0])) && (xBoxes.includes(winPattern[i][1])) && (xBoxes.includes(winPattern[i][2]))) {
    //         winner.innerHTML = 'Player X wins';
    //         console.log(winner);
    //         return;
    //     }
    // }
    // for (i = 0; i < winPattern.length;  i++) {
    //     if ((oBoxes.includes(winPattern[i][0])) && (oBoxes.includes(winPattern[i][1])) && (oBoxes.includes(winPattern[i][2]))) {
    //         winner.innerHTML = 'Player O wins';
    //         console.log(winner);
    //         return;
    //     }
    //     if (oBoxes === winPattern[i]) {
    //         winner.innerHTML = 'Player O wins';
    //         console.log(winner);
    //         return;
    //     }
    // }
// }

//call functions
// init();