const numbers: (number | number[])[] = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];

function flatten(array: (number | number[])[]) {
	const flattened = [];
    
	for (const element of array) { 
		if (Array.isArray(element)) { 
			element; // any[] 
			flattened.push(...element); 
		} else { 
			element; // any 
			flattened.push(element); 
		} 
	}
    
	return flattened;
}

const flattenedNumbers = flatten(numbers);

console.log("[Ejercicio 4.3]", flattenedNumbers);



// BONUS (item 3)

const numbers2: (number | number[])[] = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];

function flatten2<T>(array: (T | T[])[]) {
	const flattened2: T[] = [];
    
	for (const element of array) { 
		if (Array.isArray(element)) { 
			element; // any[] 
			flattened2.push(...element); 
		} else { 
			element; // any 
			flattened2.push(element); 
		} 
	}
    
	return flattened2;
}

const flattenedNumbers2 = flatten2(numbers2);

console.log("[Ejercicio 4.3 item 3]", flattenedNumbers2);