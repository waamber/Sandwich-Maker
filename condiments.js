var SandwichMaker = (function (maker) {
	const condiments = [{ "Mustard": 0.05 }, { "Ketchup": 0.05 }, { "Vinegar and Oil": 0.75 }, { "Sriracha": 0.10 }, { "Miracle Whip": 0.10 }, { "No Condiments": 0 }];
	let selectedCondiment = [];

	maker.addCondiment = function (condiment) {
		selectedCondiment.push(condiment);
	};
	maker.removeCondiment = function (uncheckedCondiment) {
		selectedCondiment.forEach(function (condiment, index) {
			if (uncheckedCondiment === condiment) {
				selectedCondiment.splice(index, 1); //starts at meat removes one
			}
		})
	};
	maker.listCondiment = function () {
		return selectedCondiment;
	};



	return maker;
})(SandwichMaker || {});