var SandwichMaker = (function (ingredients) {
	const veggies = [{ "Spinach": 0.50 }, { "Arugula": 0.50 }, { "Tomatoes": 0.75 }, { "Lettuce": 0.25 }, { "Onions": 0.75 }, { "Peppers": 0.75 }, { "Cucmbers": 0.75 }, { "Avocado": 1.25 }, { "No Veg": 0 }];

	ingredients.listVeggies = function () {
		return veggies;
	}

	return ingredients;
})(SandwichMaker || {});