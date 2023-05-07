function add(x, y) {
	return x + y;
}
function sumArray(numbers) {
	return numbers.reduce(add, 0);
}
var someSum = sumArray([3, 6, 9]);
console.log("[Ejercicio 3.1]", "3 + 6 + 9 === ".concat(someSum));
