function GameBoard() {
  //A variable 'board' that holds the gameboard as an array
  const board = [];

  //create the board with 9 empty 'slots'
  const createBoard = () => {
    for (let i = 0; i < 9; i++) {
      board[i] = '';
    }
    console.log(board);
    return board;
  };

  const placeMarker = (index, player) => {
    //if the board at the specified index is empty, place the current player's marker
    if (board[index] === '') {
      board[index] = player.marker;
      return true; //success
    } else {
      return false;
    }
  };

  //a variable that holds each winning combo as an array
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], //rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], //colummns
    [0, 4, 8],
    [2, 4, 6], //diagonals
  ];

  const checkWin = (player) => {
    //loop through winningCombos
    for (combo of winningCombos) {
      [a, b, c] = combo; //deconstruct combo to get a, b, and c as indexes
      const mark = player.marker; //declare a variable for the player.marker

      //check for a winning combo
      if (board[a] === mark && board[b] === mark && board[c] === mark) {
        //return true if a winning combo is found, breaking the loop
        console.log(`The Winning Combo is: ${combo}`);
        return true;
      }
    }
    return false; //if no win is found, return false
  };

  //A function to see if no moves are available, and no win state (a draw)
  const checkDraw = () => {
    return board.every((index) => index !== '');
  };

  return { createBoard, board, placeMarker, checkWin, checkDraw }; //return everything to be used
}

//A function to make a player object
//The player will have a name
//The player will have one of two markers, 'X' or 'O'
function Player(name, marker) {
  return { name, marker };
}

function GameController() {
  //initialize board
  const game = GameBoard();
  //define initial players
  const player1 = Player('Player 1', 'X');
  const player2 = Player('Player 2', 'O');
  //declare an initial current player
  let currentPlayer = player1;
  //create board
  game.createBoard();

  //A function to switch turns
  const switchTurn = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  };

  const playRound = (index) => {
    const successfulPlacement = game.placeMarker(index, currentPlayer); //on success, player places mark
    if (!successfulPlacement) {
      console.log(`Spot taken, current player is still ${currentPlayer.name}`);
      return;
    }

    console.log(game.board);

    //check if mark results in a win
    const win = game.checkWin(currentPlayer);
    if (win) {
      console.log(`Win: ${win}, ${currentPlayer.name} wins!`);
      return;
    }

    const draw = game.checkDraw();
    if (draw) {
      console.log('Draw!');
      return;
    }

    switchTurn();
    console.log(`Current player: ${currentPlayer.name}`);
  };

  //A function to render the board after each turn
  //A function to restart the game
  const restart = () => {
    game.createBoard(); //reinitialize board
    currentPlayer = player1; //reinitialize current player
  };

  return { playRound, switchTurn, restart };
}

const run = GameController();
run.playRound(0);
run.playRound(1);
run.playRound(2);
run.playRound(4);
run.playRound(3);
run.playRound(5);
run.playRound(7);
run.playRound(6);
run.playRound(8);

/*
Game loop:
1. initialize board and players
2. set current player to player 1
3.player one clicks a cell
4. run checkWin and checkDraw
5. If no winner, switchTurn
6. currentPlayer is now player 2
7. player 2 clicks a cell,
8.rerun steps 4 and 5
9. if winner or draw, game over, declare
10. restart
*/
