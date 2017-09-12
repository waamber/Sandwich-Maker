var SandwichMaker = (function (maker) {
	const condimentPrice = {
		"Mustard": 0.05,
		"Ketchup": 0.05,
		"Vinegar and Oil": 0.75,
		"Sriracha": 0.10,
		"Miracle Whip": 0.10,
		"No Condiments": 0
	};

	maker.addCondiment = function (selectedCondiment) {
		return condimentPrice[selectedCondiment];
	};


	return maker;
})(SandwichMaker || {});