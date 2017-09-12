var SandwichMaker = (function (maker) {
	const meatPrices = {
		"Bacon": 0.75,
		"Turkey": 0.50,
		"Roast Beef": 0.75,
		"Chicken": 0.25,
		"Steak": 0.50,
		"Tuna Salad": 0.50,
		"Extra Meat": 1.25,
		"No Meat": 0
	};

	maker.addMeat = function (selectedMeat) {
		return meatPrices[selectedMeat];
	};

	maker.removeMeat = function (uncheckedMeat) {
		selectedMeat.forEach(function (meat) {
			if (uncheckedMeat.value === meat) {
				selectedMeat.remove();
			}
		})
	};

	return maker;
})(SandwichMaker || {});






