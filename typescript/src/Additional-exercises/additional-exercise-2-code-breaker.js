function getRandomDigit() {
    return (Math.floor(Math.random() * 7)).toString();
}
function getRandomNumber() {
    var randomNumber = Array(4);
    for (var i = 0; i < randomNumber.length; i++) {
        randomNumber[i] = getRandomDigit();
    }
    return randomNumber;
}
function getPlayerNumber() {
    var numberCollection = prompt("Enter 4 digit number");
    if (numberCollection === null) {
        do {
            numberCollection = prompt("Enter 4 digit number");
        } while (numberCollection === null);
    }
    if (numberCollection.length !== 4) {
        do {
            numberCollection = prompt("Enter 4 digit number");
        } while ((numberCollection === null || numberCollection === void 0 ? void 0 : numberCollection.length) !== 4);
    }
    return numberCollection.split("");
}
// OK
function verifyExistence(randomNumber, playerNumber, result) {
    for (var i = 0; i < 4; i++) {
        if (randomNumber[i] !== playerNumber[i] && playerNumber[i].includes(randomNumber[i])) {
            result += "-";
        }
    }
    return result;
}
function verifyPositions(randomNumber, playerNumber) {
    var result = "";
    for (var i = 0; i < 4; i++) {
        if (randomNumber[i] === playerNumber[i]) {
            result += "X";
        }
    }
    result = verifyExistence(randomNumber, playerNumber, result);
    return result;
}
function playGame() {
    var randomNumber = getRandomNumber();
    var playerNumber = getPlayerNumber();
    var result = "";
    console.log(randomNumber);
    if (randomNumber.join("") !== playerNumber.join("")) {
        while (randomNumber.join("") !== playerNumber.join("")) {
            result = verifyPositions(randomNumber, playerNumber);
            console.log(result);
            playerNumber = getPlayerNumber();
        }
    }
}
playGame();
