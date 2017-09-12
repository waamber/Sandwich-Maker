var SandwichMaker = (function (maker) {
	const veggiePrices = {
		"Spinach": 0.55,
		"Arugula": 0.55,
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

	return maker;
})(SandwichMaker || {});