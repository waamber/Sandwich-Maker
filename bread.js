var SandwichMaker = (function (maker) {
	const breadPrices = [{ "White": 0.50 }, { "Wheat": 0.99 }, { "Rye": 0.75 }, { "Croissant": 1.00 }, { "Gluten-Free Flatbread": 1.00 }, { "Lettuce Wrap": 1.00 }];
	let selectedBread = [];

	maker.addBread = function (bread) {
		selectedBread.push(bread);
	};
	maker.removeBread = function (uncheckedBread) {
		selectedBread.forEach(function (bread, index) {
			if (uncheckedBread === bread) {
				selectedBread.splice(index, 1); //starts at bread removes one
			}
		})
	};
	maker.listBread = function () {
		return selectedBread;
	};
	return maker;
})(SandwichMaker || {});


