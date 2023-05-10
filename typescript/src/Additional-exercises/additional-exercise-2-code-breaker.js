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
// OK
function playerNumber() {
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
console.log(getRandomNumber());
console.log(playerNumber());
