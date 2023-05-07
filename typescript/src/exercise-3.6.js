var multiply;
var capitalize;
multiply = function (x, y) {
    return x * y;
};
capitalize = function (value) {
    return "".concat(value.charAt(0).toUpperCase()).concat(value.slice(1));
};
console.log("[Ejercicio 3.6]", capitalize("habil ".concat(multiply(5, 10))));
