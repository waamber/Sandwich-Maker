var SandwichMaker = (function (maker) {
	const meatPrices = {
		"Bacon": 0.75,
		"Turkey": 0.55,
		"Roast Beef": 0.75,
		"Chicken": 0.25,
		"Steak": 0.55,
		"Tuna Salad": 0.55,
		"Extra Meat": 1.25,
		"No Meat": 0
	};

	maker.addMeat = function (selectedMeat) {
		return meatPrices[selectedMeat];
	};

	return maker;
})(SandwichMaker || {});






