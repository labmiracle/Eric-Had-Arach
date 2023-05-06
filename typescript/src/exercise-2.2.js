function padLeft(value, padding) {
    if (typeof padding === "number") {
        return "".concat(Array(padding + 1).join(" ")).concat(value);
    }
    else {
        return padding + value;
    }
}
console.log("[Ejercicio 4.2]", " \n    ".concat(padLeft("", 45646540), "\n    ").concat(padLeft("", ""), "\n    ").concat(padLeft("", ""), "\n    ").concat(padLeft("", ""), "\n    ").concat(padLeft("", "")));
