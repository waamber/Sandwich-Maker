var SandwichMaker = (function (maker) {
	const veggiePrices = {
		"Spinach": 0.50,
		"Arugula": 0.50,
		"Tomatoes": 0.75,
		"Lettuce": 0.25,
		"Onions": 0.75,
		"Peppers": 0.75,
		"Cucumbers": 0.75,
		"Avocado": 1.25,
		"No Veg": 0
	};

	maker.addVeggie = function (selectedVeggie) {
		return veggiePrices[selectedVeggie];
	};

	maker.removeVeggie = function (uncheckedVeggie) {
		selectedVeggie.forEach(function (veggie) {
			if (uncheckedVeggie.value === veggie) {
				selectedVeggie.remove();
			}
		})
	};
	return maker;
})(SandwichMaker || {});