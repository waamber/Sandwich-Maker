var SandwichMaker = (function (maker) {
	const meatPrices = [{ "Bacon": 0.50 }, { "Turkey": 0.50 }, { "Ham": 0.75 }, { "Roast Reef": 1.00 }, { "Chicken": 0.75 }, { "Salami": 0.75 }, { "No Meat": 0 }];

	let selectedMeats = ["ham", "turkey"];

	maker.addMeat = function (meat) {
		selectedMeats.push(meat);
	};

	maker.removeMeat = function (uncheckedMeat) {
		selectedMeats.forEach(function (meat, index) {
			if (uncheckedMeat === meat) {
				selectedMeats.splice(index, 1); //starts at meat removes one
			}
		})
	};

	maker.listMeats = function () {
		return selectedMeats;
	};

	return maker;
})(SandwichMaker || {});


// console.log(SandwichMaker.listMeats());


console.log(SandwichMaker.listMeats())
SandwichMaker.removeMeat("turkey")
console.log(SandwichMaker.listMeats())
