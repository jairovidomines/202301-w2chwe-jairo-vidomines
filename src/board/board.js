import Cell from "../Cell/Cell.js";

const board = (rows, columns) => {
  const totalRows = rows;
  const totalColumns = columns;

  const world = [];

  for (let row = 0; row < totalRows; row++) {
    world[row] = [];
    for (let column = 0; column < totalColumns; column++) {
      const cell = new Cell(Math.floor(Math.random() * 2) === 1);
      world[row][column] = cell.getValue();
    }
  }

  return world;
};

export default board;
