import Cell from "./Cell";

describe("Given a class Cell", () => {
  describe("When it receives a property isAlive", () => {
    test("It should return undefined", () => {
      const propertyIsAlive = new Cell();
      const expectedProperty = undefined;

      const resultedProperty = propertyIsAlive.isAlive;

      expect(resultedProperty).toBe(expectedProperty);
    });
  });
});
