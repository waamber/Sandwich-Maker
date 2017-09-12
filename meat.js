var SandwichMaker = (function (maker) {
	const meatPrices = { "Bacon": 0.50, "Turkey": 0.50 };
	let selectedMeat = [];

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






