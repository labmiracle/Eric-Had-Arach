function myFunction(preciousStones: string, ownStones: string): number {
	let acumulator = 0;
	for (let i = 0; i < preciousStones.length; i++) {
		if (ownStones.includes(preciousStones[i])) {
			for (let j = 0; j < ownStones.length; j++) {
				if (ownStones[j] === preciousStones[i]) {
					acumulator++;
				}
			}
		}
	}
	return acumulator;
}

console.assert(myFunction("aA", "aAAbbbb") === 3);
console.assert(myFunction("z", "ZZ") === 0);