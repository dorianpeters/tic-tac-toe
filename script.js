const Game = (function () {
  const game = () => {
    // const player1name = prompt("What is Player 1's name?");
    // const player2name = prompt("What is Player 2's name?");
    const player1name = "Dorian";
    const player2name = "Farrah";
    const player1 = createPlayer(player1name, "X");
    const player2 = createPlayer(player2name, "O");
    console.log(player1.name);
    console.log(player2.name);
    Gameboard.displayBoard();
  };
  return { game };
})();

const Gameboard = (function () {
  const board = [
    ["#", "#", "#"],
    ["#", "#", "#"],
    ["#", "#", "#"],
  ];
  const displayBoard = () => {
    console.table(board);
  };
  return { board, displayBoard };
})();

const createPlayer = function (name, symbol) {
  this.name = name;
  this.symbol = symbol;
  return { name };
};

Game.game();
