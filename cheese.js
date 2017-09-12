var SandwichMaker = (function (maker) {
	const cheesePrices = { "Cheddar": 0.50, "Swiss": 0.50, "Pepperjack": 0.75, "Gouda": 0.75, "No Cheese": 0 };
	let selectedCheese = [];

	maker.addCheese = function (selectedCheese) {
		return cheesePrices[selectedCheese];
	};

	maker.removeCheese = function (uncheckedCheese) {
		selectedCheese.forEach(function (cheese) {
			if (uncheckedCheese.value === cheese) {
				selectedCheese.remove();
			}
		})
	};
	return maker;

})(SandwichMaker || {});
