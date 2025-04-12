//A function to render the board after each turn
//A function to switch turns
//A function to restart the game

function GameBoard() {
  //A variable 'board' that holds the gameboard as an array
  const board = [];
  //a variable draw that is set to false until boaard array is filled with no winner
  let draw = false;

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
      console.log(index);
      board[index] = player.marker;
      //return true to indicate success, else return false
      return true;
    } else {
      return false;
    }
  }

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

  //A function to see if no moves are available, and no win state (a draw)
  const checkDraw = () => {
    board.forEach((index) => {
      if (index !== null && index !== '') {
        draw = true;
        console.log('draw', draw);
        return draw;
      } else {
        console.log('draw', draw);
      }
    });
  };

  //return everything to be used
  return { createBoard, board, placeMarker, checkDraw };
}

//A function to make a player object
//The player will have a name
//The player will have one of two markers, 'X' or 'O'
function Player(name, marker) {
  return { name, marker };
}

const game = GameBoard();
game.createBoard();
// console.log(game.checkDraw());
// console.log(checkWin());
// console.log(game.placeMarker());
const player1 = Player('Player 1', 'X');
const player2 = Player('Player 2', 'O');
// console.log(player1);
// console.log(player2);

console.log(game.placeMarker(3, player1), game.board);
console.log(game.placeMarker(3, player2));
