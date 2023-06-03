const zero = (operation = undefined) => operation ? operation(0) : 0;
const one = (operation = undefined) => operation ? operation(1) : 1;
const two = (operation = undefined) => operation ? operation(2) : 2;
const three = (operation = undefined) => operation ? operation(3) : 3;
const four = (operation = undefined) => operation ? operation(4) : 4;
const five = (operation = undefined) => operation ? operation(5) : 5;
const six = (operation = undefined) => operation ? operation(6) : 6;
const seven = (operation = undefined) => operation ? operation(7) : 7;
const eight = (operation = undefined) => operation ? operation(8) : 8;
const nine = (operation = undefined) => operation ? operation(9) : 9;

const plus = num1 => num2 => num1 + num2;
const minus = num1 => num2 => num2 - num1;
const times = num1 => num2 => num1 * num2;
const dividedBy = num1 => num2 => Math.floor(num2 / num1);


