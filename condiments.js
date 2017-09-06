var SandwichBuilder = (function(ingredients){
	const condiments = [{"Mustard": 0.05}, {"Ketchup": 0.05}, {"Vinegar and Oil": 0.75}, {"Sriracha": 0.10}, {"Miracle Whip": 0.10}, {"No Condiments": 0}];
	
ingredients.listCondiments = function(){
		return condiments;
	}


	return ingredients;
})(SandwichBuilder || {});