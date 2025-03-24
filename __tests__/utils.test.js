// __tests__/utils.test.js
const sum = require('../utils');  // Ajusta la ruta si es necesario

test('suma 1 + 2 para igualar 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('suma 0 + 0 para igualar 0', () => {
  expect(sum(0, 0)).toBe(0);
});
