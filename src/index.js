import board from "./board/board.js";

const showBoard = () => {
  console.clear();
  console.table(board(10, 10));
};

setInterval(showBoard, 1000);
