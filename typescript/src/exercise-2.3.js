var numbers = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];
function flatten(array) {
	var flattened = [];
	for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
		var element = array_1[_i];
		if (Array.isArray(element)) {
			element; // any[] 
			flattened.push.apply(// any[] 
				flattened, element);
		}
		else {
			element; // any 
			flattened.push(element);
		}
	}
	return flattened;
}
var flattenedNumbers = flatten(numbers);
console.log("[Ejercicio 4.3]", flattenedNumbers);
