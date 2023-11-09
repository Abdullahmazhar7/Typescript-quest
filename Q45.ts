
function createCar(manufacturer: string, modelName: string, ...options: { [key: string]: any }[]): { [key: string]: any } {
    const car: { [key: string]: any } = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    options.forEach(option => {
        const key = Object.keys(option)[0];
        car[key] = option[key];
    });

    return car;
}
const carInfo = createCar("Toyota", "Fortuner", { color: "Black" }, { year: 2023 }, { hasSunroof: false });

console.log(carInfo);
