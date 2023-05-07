function greet(greeting) {
	if (greeting === void 0) { greeting = "hola"; }
	/* si indico que greeting es tipo string, al estar el parámetro por defecto "hola" da el siguiente error: "Type string trivially inferred from a string literal, remove type annotation.", por eso lo omito*/
	return greeting.toUpperCase();
}
var defaultGreeting = greet();
var portugueseGreeting = greet("Oi como vai!");
console.log("[Ejercicio 3.4]", defaultGreeting, portugueseGreeting);
