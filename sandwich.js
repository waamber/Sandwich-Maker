// var SandwichMaker = (function() {

//   // Private variable to store the price
//   var totalPrice = 0;

//   // Return the public interface that other code can interact with
//   return {
//     addTopping: function(toppingPrice) {
//       totalPrice += toppingPrice;
//     }
//   };
// })();





let myBreads = SandwichBuilder.listBreads();
console.log("Breads", myBreads);

let myCondiments = SandwichBuilder.listCondiments();
console.log("Condiments", myCondiments);

let myMeats = SandwichBuilder.listMeats();
console.log("Meats", myMeats);

let myVeggies = SandwichBuilder.listVeggies();
console.log("Veggies", myVeggies);

let myCheeses = SandwichBuilder.listCheeses();
console.log("Cheeses", myCheeses);