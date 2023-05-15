function createCards() {
    var quantityOfCards = 10;
    var cards = Array(10);
    for (var i = 0; i < quantityOfCards; i++) {
        var randomNumber = Math.floor(Math.random() * 10) + 1;
        while (cards.includes(randomNumber)) {
            randomNumber = Math.floor(Math.random() * 10) + 1;
        }
        cards.push(randomNumber);
    }
    return cards;
}
function extractCardPlayer1(cards) {
    return cards.pop();
}
function extractCardPlayer2(cards) {
    return cards.pop();
}
function playGame() {
    var cards = createCards();
    var cardPlayer1 = extractCardPlayer1(cards);
    var cardPlayer2 = extractCardPlayer2(cards);
    if (cardPlayer1 > cardPlayer2) {
        console.log("Player 1 wins the game");
    }
    else {
        console.log("Player 2 wins the game");
    }
}
playGame();
