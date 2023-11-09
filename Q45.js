function createCar(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    options.forEach(function (option) {
        var key = Object.keys(option)[0];
        car[key] = option[key];
    });
    return car;
}
var carInfo = createCar("Toyota", "Fortuner", { color: "Black" }, { year: 2023 }, { hasSunroof: false });
console.log(carInfo);
