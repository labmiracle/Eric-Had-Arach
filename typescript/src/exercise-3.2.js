var bankAccount = {
	money: 0,
	deposit: function (value, message) {
		this.money += value;
		if (message) {
			console.log(message);
		}
	}
};
bankAccount.deposit(20);
bankAccount.deposit(10, "Deposit received");
console.log("[Exercise 3.2]", "Account value: $".concat(bankAccount.money));
