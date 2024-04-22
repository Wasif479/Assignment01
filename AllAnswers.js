// Answer No 2
// Define the function to build a car object
function build_car(manufacturer, model, options) {
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // If there are additional options, add them to the car object
    if (options) {
        for (var option in options) {
            car[option] = options[option];
        }
    }
    return car;
}
// Example calls to the function
var myCar = build_car('Suzuki Mehran', 'Model 2005', { color: 'red velvet ', ac: true });
var anotherCar = build_car('Suzuki Alto', 'Model 2021', { color: 'white', powerstarring: true });
// Print the car objects to verify the content
console.log(myCar);
console.log(anotherCar);
