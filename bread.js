var SandwichMaker = (function (maker) {
	const breadPrices = [{ "White": 0.50 }, { "Wheat": 0.99 }, { "Rye": 0.75 }, { "Croissant": 1.00 }, { "Gluten-Free Flatbread": 1.00 }, { "Lettuce Wrap": 1.00 }];

	let selectedBread = [];

	maker.addBread = function (bread) {
		selectedMeats.push(bread);
	};

	maker.listBreads = function () {
		return selectedBread;
	}


	return maker;
})(SandwichMaker || {});


