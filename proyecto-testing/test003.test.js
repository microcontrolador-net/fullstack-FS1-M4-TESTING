// test002.test.js
const suma = require("./app"); // Importamos la función suma

test("Suma de 2 + 3 debe ser 5", () => {
  expect(suma(2, 2)).toBe(5);
});
