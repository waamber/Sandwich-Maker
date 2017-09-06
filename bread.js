var SandwichBuilder = (function(ingredients){
	const breads = [{"White": 0.50}, {"Wheat": 0.99}, {"Rye": 0.75}, {"Croissant": 1.00}, {"Gluten-Free Flatbread": 1.00}, {"Lettuce Wrap": 1.00}];
	
	ingredients.listBreads = function(){
		return breads;
	}

	

	return ingredients;
})(SandwichBuilder || {});