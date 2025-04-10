//A function to make a player
//The player will have a name
//The player will have one of two markers, 'X' or 'O'
//A function to place a marker on the board
//A function to render the board after each turn
//A function to switch turns
//A function to check if the spot is already taken
//A function to check if that move results in a win
//A function to see if no moves are available, and no win state (a draw)
//A function to restart the game

function GameBoard() {
  //A variable 'board' that holds the gameboard as an array
  const board = [];

  //A function that makes 3 empty arrays for rows
  //and for each row array, add 3 empty string columns
  for (let row = 0; row < 3; row++) {
    board[row] = [];
    for (let column = 0; column < 3; column++) {
      board[row][column] = '';
    }
  }
  console.log(board);
}
