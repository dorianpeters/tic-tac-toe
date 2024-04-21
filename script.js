const Gameboard = (function () {
  const board = [];
  const size = 9; // 3 x 3 board
  board.length = size; // give board array size of 9
  // board.fill(null);
  return { board };
})();

console.log(Gameboard.board);
