function getRandomDigit(): string {
	return (Math.floor(Math.random() * 7)).toString();
}

function getRandomNumber(): string[] {
	const randomNumber: string[] = Array(4);
	for (let i = 0; i < randomNumber.length; i++) {
		randomNumber[i] = getRandomDigit();
	}
	return randomNumber;
}

function getPlayerNumber(): string[] {
	let numberCollection: string | null = prompt("Enter 4 digit number");
	while (numberCollection === null || numberCollection?.length !== 4) {
		numberCollection = prompt("Enter 4 digit number");
	}
	return numberCollection.split("");    
}

// OK

function verifyExistence(randomNumber: string[], playerNumber: string[], result: string) {
	for (let i = 0; i < 4; i++) {
		if (randomNumber[i] !== playerNumber[i] && playerNumber[i].includes(randomNumber[i])) {
			result += "-";
		}
	}
	return result;
}

function verifyPositions(randomNumber: string[], playerNumber: string[]): string {
	let result = "";
	for (let i = 0; i < 4; i++) {
		if (randomNumber[i] === playerNumber[i]) {
			result += "X";
		}
	}
	result = verifyExistence(randomNumber, playerNumber, result);
	return result;
}

function playGame(): void {
	const randomNumber: string[] = getRandomNumber();
	let playerNumber: string[] = getPlayerNumber();
	let result = "";
	console.log(randomNumber);
	if (randomNumber.join("") !== playerNumber.join("")) {
		while(randomNumber.join("") !== playerNumber.join("")) {
			result = verifyPositions(randomNumber, playerNumber);
			console.log(result);
			playerNumber = getPlayerNumber();
		}
	}
}

playGame();