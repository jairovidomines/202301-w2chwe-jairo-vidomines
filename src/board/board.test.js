import board from "./board";

describe("Given a function board", () => {
  describe("When it receives the numbers 10 and 10", () => {
    test("It should return an array with 10 rows", () => {
      const rows = 10;
      const columns = 10;
      const expectedLength = 10;
      const arrayCreated = board(rows, columns);

      const resultedLength = arrayCreated.length;

      expect(resultedLength).toEqual(expectedLength);
    });

    test("It should return an array with 10 columns for 1st row", () => {
      const rows = 10;
      const columns = 10;
      const expectedLength = 10;
      const arrayCreated = board(rows, columns);

      const resultedLength = arrayCreated[0].length;

      expect(resultedLength).toStrictEqual(expectedLength);
    });

    test("It should return an array with 10 columns for 3rd row", () => {
      const rows = 10;
      const columns = 10;
      const expectedLength = 10;
      const arrayCreated = board(rows, columns);

      const resultedLength = arrayCreated[2].length;

      expect(resultedLength).toStrictEqual(expectedLength);
    });
  });
});
