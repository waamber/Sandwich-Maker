const meatCheck = document.getElementById("meatForm");
const breadCheck = document.getElementById("breadForm");
const cheeseCheck = document.getElementById("cheeseForm");
const veggieCheck = document.getElementById("veggiesForm");
const condimentCheck = document.getElementById("condimentsForm");
const selectedIngredients = document.getElementById("selectedIngredients");
let ingredientsArray = [];

breadCheck.addEventListener("change", function (event) {
    if (event.target.checked === true) {
        let breadPrice = SandwichMaker.addBread(event.target.value);
        ingredientsArray.push({ name: event.target.value, price: breadPrice })
    } else {
        ingredientsArray.pop(event.target.value);
    }
    console.log("Added Bread", ingredientsArray);
});

meatCheck.addEventListener("change", function (event) {
    if (event.target.checked === true) {
        let meatPrice = SandwichMaker.addMeat(event.target.value);
        ingredientsArray.push({ name: event.target.value, price: meatPrice })
    } else {
        ingredientsArray.pop(event.target.value);
    }
    console.log("Added Meat", ingredientsArray);
});

cheeseCheck.addEventListener("change", function (event) {
    if (event.target.checked === true) {
        let cheesePrice = SandwichMaker.addCheese(event.target.value);
        ingredientsArray.push({ name: event.target.value, price: cheesePrice })
    } else {
        ingredientsArray.pop(event.target.value);
    }
    console.log("Added Cheese", ingredientsArray);
});

veggieCheck.addEventListener("change", function (event) {
    if (event.target.checked === true) {
        let veggiePrice = SandwichMaker.addVeggie(event.target.value);
        ingredientsArray.push({ name: event.target.value, price: veggiePrice })
    } else {
        ingredientsArray.pop(event.target.value);
    }
    console.log("Added Veggie", ingredientsArray);
});

condimentCheck.addEventListener("change", function (event) {
    if (event.target.checked === true) {
        let condimentPrice = SandwichMaker.addCondiment(event.target.value);
        ingredientsArray.push({ name: event.target.value, price: condimentPrice })
    } else {
        ingredientsArray.pop(event.target.value);
    }
    console.log("Added Condiments", ingredientsArray);
});