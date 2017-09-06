var SandwichBuilder = (function(ingredients){
	const meats = [{"Bacon": 0.50}, {"Turkey": 0.50}, {"Ham": 0.75}, {"Roast Reef": 1.00}, {"Chicken": 0.75}, {"Salami": 0.75}, {"No Meat": 0}];
	
ingredients.listMeats = function(){
		return meats;
	}


	return ingredients;
})(SandwichBuilder || {});