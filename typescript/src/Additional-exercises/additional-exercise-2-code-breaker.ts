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

function verifyPositions(randomNumber: string[], playerNumber: string[], result: string): string {
	for (let i = 0; i < 4; i++) {
		if (randomNumber[i] === playerNumber[i]) {
			result += "X";
		}
	}
	return result;
}

function verifyExistence(randomNumber: string[], playerNumber: string[], result: string): string {
	for (let i = 0; i < 4; i++) {
		if (randomNumber.includes(playerNumber[i]) && (randomNumber[i] !== playerNumber[i])) {
			result += "-";
		}
	}
	return result;
}


function verify(randomNumber: string[], playerNumber: string[], result: string) {
	result = "";
	result = verifyPositions(randomNumber, playerNumber, result);
	result = verifyExistence(randomNumber, playerNumber, result);
	return result;
}

function playGame(): void {
	const randomNumber: string[] = getRandomNumber();
	let playerNumber: string[] = getPlayerNumber();
	alert(`The random number is ${randomNumber.join("")}`);
	while(randomNumber.join("") !== playerNumber.join("")) {
		let result = "";
		result = verify(randomNumber, playerNumber, result);
		alert(`${result}`);
		playerNumber = getPlayerNumber();
	}
	alert("XXXX, you win");
}

playGame();