function computeScore(word) {
	var letters = word.toUpperCase().split("");
	return letters.reduce(function (accum, curr) { return accum += getPointsFor(curr); }, 0);
}
function getPointsFor(letter) {
	var lettersAndPoints = [
		["AEOIULNRST", 1],
		["DG", 2],
		["BCMP", 3],
		["FHVWY", 4],
		["K", 5],
		["JX", 8],
		["QZ", 10],
	];
	return lettersAndPoints.reduce(function (computedScore, pointsTuple) {
		var letters = pointsTuple[0], score = pointsTuple[1];
		if (letters.split("").find(function (ll) { return ll === letter; })) {
			return computedScore += score;
		}
		return computedScore;
	}, 0);
}
console.log("[Ejercicio 3.3]", "zoologico vale ".concat(computeScore("zoo"), " puntos."));
