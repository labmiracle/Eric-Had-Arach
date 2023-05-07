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
// BONUS (item 3)
var numbers2 = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];
function flatten2(array) {
	var flattened2 = [];
	for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
		var element = array_2[_i];
		if (Array.isArray(element)) {
			element; // any[] 
			flattened2.push.apply(// any[] 
				flattened2, element);
		}
		else {
			element; // any 
			flattened2.push(element);
		}
	}
	return flattened2;
}
var flattenedNumbers2 = flatten2(numbers2);
console.log("[Ejercicio 4.3 item 3]", flattenedNumbers2);
