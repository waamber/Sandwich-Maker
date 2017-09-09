var SandwichMaker = (function (maker) {
	const cheese = [{ "Cheddar": 0.50 }, { "Swiss": 0.50 }, { "Pepperjack": 0.75 }, { "Gouda": 0.75 }, { "No Cheese": 0 }];
	let selectedCheese = [];

	maker.addCheese = function (cheese) {
		selectedCheese.push(cheese);
	};
	maker.removeCheese = function (uncheckedCheese) {
		selectedCheese.forEach(function (cheese, index) {
			if (uncheckedCheese === cheese) {
				selectedCheese.splice(index, 1); //starts at meat removes one
			}
		})
	};
	maker.listCheese = function () {
		return selectedCheese;
	};
	maker.cheeseText = function (meat) {
		selectedIngredients.innerHTML = selectedCheese;
	}
	return maker;
})(SandwichMaker || {});
