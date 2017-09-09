const meatCheck = document.getElementById("meatForm");
const breadCheck = document.getElementById("breadForm");
const cheeseCheck = document.getElementById("cheeseForm");
const veggieCheck = document.getElementById("veggiesForm");
const condimentCheck = document.getElementById("condimentsForm");
const selectedIngredients = document.getElementById("selectedIngredients");





breadCheck.addEventListener("change", function (event) {
    if (event.target.checked === true) {
        SandwichMaker.addBread(event.target.value);
    } else {
        SandwichMaker.removeBread(event.target.value);
    }
    console.log("Added Bread", SandwichMaker.listBread());
});

meatCheck.addEventListener("change", function (event) {
    if (event.target.checked === true) {
        SandwichMaker.addMeat(event.target.value);
    } else {
        SandwichMaker.removeMeat(event.target.value);
    }
    SandwichMaker.meatText();

    console.log("Added Meat", SandwichMaker.listMeat());
});

cheeseCheck.addEventListener("change", function (event) {
    if (event.target.checked === true) {
        SandwichMaker.addCheese(event.target.value);
    } else {
        SandwichMaker.removeCheese(event.target.value);
    }
    SandwichMaker.cheeseText();

    console.log("Added Cheese", SandwichMaker.listCheese());
});

veggieCheck.addEventListener("change", function (event) {
    if (event.target.checked === true) {
        SandwichMaker.addVeggie(event.target.value);
    } else {
        SandwichMaker.removeVeggie(event.target.value);
    }
    console.log("Added Veggie", SandwichMaker.listVeggie());
});

condimentCheck.addEventListener("change", function (event) {
    if (event.target.checked === true) {
        SandwichMaker.addCondiment(event.target.value);
    } else {
        SandwichMaker.removeCondiment(event.target.value);
    }
    console.log(event);
    console.log("Added Condiment", SandwichMaker.listCondiment());
});


// function combineArrays(){
//     selectedBread 
// }