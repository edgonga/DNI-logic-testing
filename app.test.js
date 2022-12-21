const letraDNI = require ("./app") 

test('dando un DNI, devuelve la letra correctamente', () => {
    expect(letraDNI(47739142)).toBe(C)
 })