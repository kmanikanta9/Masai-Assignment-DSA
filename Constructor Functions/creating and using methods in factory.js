function createCar(make,model,year){
    let cars={}
    cars.make=make;
    cars.mode1=model;
    cars.year=year;
    cars.describeCar=function(){
        console.log(`This car is a ${year} ${make} ${model}`)
    }
    return cars
}
const car=createCar("Toyota","Camry",2022)
car.describeCar()