export class Cell {
  isAlive;

  constructor(isAlive) {
    this.isAlive = isAlive;
  }

  getValue() {
    return this.isAlive ? "⚫" : "⚪";
  }
}
export default Cell;
