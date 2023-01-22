import Cell from "../Cell/Cell.js";

const board = (rows, columns) => {
  const totalRows = rows;
  const totalColumns = columns;

  const world = [];

  for (let row = 0; row < totalRows; row++) {
    world[row] = [];
    for (let column = 0; column < totalColumns; column++) {
      world[row][column] = new Cell(Math.floor(Math.random() * 2) === 1);
    }
  }

  return world;
};

export default board;
