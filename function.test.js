const { returnTwo, greeting, add, multiply, divide, subtract } = require("./functions")

test('Should return 2', () => {
    expect(returnTwo()).toBe(2)
});

test('Should return hello, {name}', () => {
    expect(greeting('Michael')).toBe('Hello, Michael')
});

test('Should return sum of {num1} and {num2}', () => {
    expect(add(1,2)).toBe(3),
    expect(add(9,5)).toBe(14)
});

// test('Should return sum of {num1} and {num2}', () => {
//     expect(add(9,5)).toBe(14)
// });

test('Should return product of {num1} and {num2}', () => {
    expect(multiply(1,2)).toBe(2),
    expect(multiply(9,5)).toBe(45)
});

test('Should return dividend of {num1} and {num2}', () => {
    expect(divide(9,3)).toBe(3),
    expect(divide(140,10)).toBe(14)
});

test('Should return difference of {num1} and {num2}', () => {
    expect(subtract(5,2)).toBe(3),
    expect(subtract('19',5)).toBe(14)
});