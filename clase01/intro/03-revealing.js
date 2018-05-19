var Car = (function () {
    function Car() {
        //code ...
    }

    Car.prototype.color = function () {
        return 'negro'
    }
    Car.prototype.marca = function () {
        return 'bmw'
    }

    return Car;
})()

var car = new Car();
console.log(car.color(), car.marca())