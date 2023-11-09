function makeSandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    if (ingredients.length === 0) {
        console.log("You ordered empty sandwich. Please choose some ingredients!");
    }
    else {
        console.log("Ingredients: " + ingredients.join(", "));
    }
    console.log("\n");
}
makeSandwich("Ham", "Cheese", "Lettuce");
makeSandwich("Turkey", "Swiss");
makeSandwich();
