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
    while (numberCollection === null || (numberCollection === null || numberCollection === void 0 ? void 0 : numberCollection.length) !== 4) {
        numberCollection = prompt("Enter 4 digit number");
    }
    return numberCollection.split("");
}
function verifyPositions(randomNumber, playerNumber, result) {
    for (var i = 0; i < 4; i++) {
        if (randomNumber[i] === playerNumber[i]) {
            result += "X";
        }
    }
    return result;
}
function verifyExistence(randomNumber, playerNumber, result) {
    for (var i = 0; i < 4; i++) {
        if (randomNumber.includes(playerNumber[i]) && (randomNumber[i] !== playerNumber[i])) {
            result += "-";
        }
    }
    return result;
}
function verify(randomNumber, playerNumber, result) {
    result = "";
    result = verifyPositions(randomNumber, playerNumber, result);
    result = verifyExistence(randomNumber, playerNumber, result);
    return result;
}
function playGame() {
    var randomNumber = getRandomNumber();
    var playerNumber = getPlayerNumber();
    alert("The random number is ".concat(randomNumber.join("")));
    while (randomNumber.join("") !== playerNumber.join("")) {
        var result = "";
        result = verify(randomNumber, playerNumber, result);
        alert("".concat(result));
        playerNumber = getPlayerNumber();
    }
    alert("XXXX, you win");
}
playGame();
