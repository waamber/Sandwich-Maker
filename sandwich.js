const meatCheck = document.getElementById("meatForm");
const selectedIngredients = document.getElementById("selectedIngredients");

meatCheck.addEventListener("change", function (event) {
    if (event.target.checked === true) {
        SandwichMaker.addMeat(event.target.value);
    } else {
        SandwichMaker.removeMeat(event.target.value);
    }
    console.log(SandwichMaker.listMeats());
});



//add removal 





