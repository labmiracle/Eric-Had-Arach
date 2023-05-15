
function createCards(): number[] {
	const quantityOfCards = 10;
	const cards: number[] = Array(10);
	for (let i = 0; i < quantityOfCards; i++) {
		let randomNumber: number = Math.floor(Math.random() * 10) + 1;
		while (cards.includes(randomNumber)) {
			randomNumber = Math.floor(Math.random() * 10) + 1;
		}
		cards.push(randomNumber);
	}
	return cards;
}

function extractCardPlayer1(cards: number[]): number | undefined {
	return cards.pop();
}

function extractCardPlayer2(cards: number[]): number | undefined {
	return cards.pop();
}

function playGame(): void {
	const cards: number[] = createCards();
	const cardPlayer1 = extractCardPlayer1(cards);
	const cardPlayer2 = extractCardPlayer2(cards);
	if (cardPlayer1 !== undefined && cardPlayer2 !== undefined && cardPlayer1 > cardPlayer2) {
		console.log("Player 1 wins the game");
	}
	else {
		console.log("Player 2 wins the game");
	}
}

playGame();


