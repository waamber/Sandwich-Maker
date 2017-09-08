var SandwichMaker = (function (ingredients) {
	const cheese = [{ "Cheddar": 0.50 }, { "Swiss": 0.50 }, { "Pepperjack": 0.75 }, { "Gouda": 0.75 }, { "No Cheese": 0 }];

	ingredients.listCheeses = function () {
		return cheese;
	}


	return ingredients;
})(SandwichMaker || {});
