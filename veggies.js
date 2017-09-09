var SandwichMaker = (function (maker) {
	const veggies = [{ "Spinach": 0.50 }, { "Arugula": 0.50 }, { "Tomatoes": 0.75 }, { "Lettuce": 0.25 }, { "Onions": 0.75 }, { "Peppers": 0.75 }, { "Cucmbers": 0.75 }, { "Avocado": 1.25 }, { "No Veg": 0 }];
	let selectedVeggie = [];

	maker.addVeggie = function (veggie) {
		selectedVeggie.push(veggie);
	};
	maker.removeVeggie = function (uncheckedVeggie) {
		selectedVeggie.forEach(function (veggie, index) {
			if (uncheckedVeggie === veggie) {
				selectedVeggie.splice(index, 1);
			}
		})
	};
	maker.listVeggie = function () {
		return selectedVeggie;
	};
	return maker;
})(SandwichMaker || {});