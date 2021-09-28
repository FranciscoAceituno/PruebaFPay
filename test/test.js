const { getPrimos } = require("../controllers/calculoController");


test('Hay Nros Primos', () => {

    let msgSalida = '';
    const resultado = getPrimos(15);

     expect(resultado.primos.length).toBeGreaterThan(0);
});

test('No Hay Nros Primos', () => {

    let msgSalida = '';
    const resultado = getPrimos(0);
    expect(resultado.msgSalida.length).toBeGreaterThan(0);
});

test('Nros Primos con parametro alfabetico', () => {

    let msgSalida = '';
    const resultado = getPrimos('asdf');
    expect(resultado.msgSalida.length).toBeGreaterThan(0);
});
test('Nros Primos sin datos en parametro', () => {

    let msgSalida = '';
    const resultado = getPrimos('');
    expect(resultado.msgSalida.length).toBeGreaterThan(0);
});