const calculate = require('./calculate')

test('test the calculate/mul function', () => {
    expect(calculate.ml(1,1)).toBe(1);
});