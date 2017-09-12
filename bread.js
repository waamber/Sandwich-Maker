var SandwichMaker = (function (maker) {
	const breadPrices = {
		"White": 0.50,
		"Wheat": 0.99,
		"Rye": 0.75,
		"Croissant": 1.00,
		"Gluten-Free Flatbread": 1.00,
		"Lettuce Wrap": 1.00
	};

	maker.addBread = function (selectedBread) {
		return breadPrices[selectedBread];
	};

	maker.removeBread = function (uncheckedBread) {
		selectedBread.forEach(function (bread) {
			if (uncheckedBread.value === bread) {
				selectedBread.remove();
			}
		})
	};

	return maker;
})(SandwichMaker || {});


