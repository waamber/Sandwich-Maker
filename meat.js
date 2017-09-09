var SandwichMaker = (function (maker) {
	const meatPrices = [{ "Bacon": 0.50 }, { "Turkey": 0.50 }, { "Ham": 0.75 }, { "Roast Reef": 1.00 }, { "Chicken": 0.75 }, { "Salami": 0.75 }, { "No Meat": 0 }];
	let selectedMeat = [];

	maker.addMeat = function (meat) {
		selectedMeat.push(meat);
	};
	maker.removeMeat = function (uncheckedMeat) {
		selectedMeat.forEach(function (meat, index) {
			if (uncheckedMeat === meat) {
				selectedMeat.splice(index, 1); //starts at meat removes one
			}
		})
	};
	maker.listMeat = function () {
		return selectedMeat;
	};

	maker.meatText = function () {
		selectedIngredients.innerHTML = selectedMeat
	}

	return maker;
})(SandwichMaker || {});






