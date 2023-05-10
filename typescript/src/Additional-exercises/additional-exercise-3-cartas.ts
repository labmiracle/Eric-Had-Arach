
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

function extractCardPlayer1(cards: number[]): number {
	return cards.pop();
}

function extractCardPlayer2(cards: number[]): number {
	return cards.pop();
}

function playGame(): void {
	const cards: number[] = createCards();
	const cardPlayer1: number = extractCardPlayer1(cards);
	const cardPlayer2: number = extractCardPlayer2(cards);
	if (cardPlayer1 > cardPlayer2) {
		console.log("Player 1 wins the game");
	}
	else {
		console.log("Player 2 wins the game");
	}
}

playGame();


