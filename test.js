const { fromEuroToDollar, oneEuroIs, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * oneEuroIs.USD;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test ("Un dolar equivale a 146.2616 yen", function() {
  const yen = fromDollarToYen(1);

  const expected = (1 / oneEuroIs.USD) * oneEuroIs.JPY;

  expect(yen).toBe(expected);
});

test ("Un Yen equivale a 0,0055 Pound", function () {
  const pound = fromYenToPound(1);

  const expected = (1 / oneEuroIs.JPY) * oneEuroIs.GBP;

  expect(pound).toBe(expected);
})