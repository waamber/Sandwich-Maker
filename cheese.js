var SandwichMaker = (function (maker) {
	const cheesePrices = {
		"Cheddar": 0.55,
		"Swiss": 0.55,
		"Pepperjack": 0.75,
		"Gouda": 0.75,
		"Extra Cheese": 0.75,
		"No Cheese": 0
	};

	maker.addCheese = function (selectedCheese) {
		return cheesePrices[selectedCheese];
	};

	return maker;
})(SandwichMaker || {});
