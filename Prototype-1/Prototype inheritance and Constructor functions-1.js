function Car(make,model,year,isAvailable=true){
    this.make=make;
    this.model=model;
    this.year=year;
    this.isAvailable=isAvailable;

}
Car.prototype.display=function(){
    console.log(this.make,this.model,this.year,this.isAvailable)
}
function Customer(name){
    this.name=name;
    this.rentedCars=[]
    
}
Customer.prototype.rentforcars=function(cars){
    if(cars.isAvailable==true){
        this.rentedCars.push(cars)
        cars.isAvailable=false
    }
    else{
        this.rentedCars=`Car is already rented`
    }
}
Customer.prototype.returncars=function(cars){
    setTimeout(()=>{
        let arr=[]
        for(let ele of this.rentedCars){
            if(cars.name!=ele.name){
                arr.push(ele)
            }
        }
        if(arr.length==this.rentedCars.length){
            console.log("Car not found")
        }
        else{
            this.rentedCars=arr
            console.log("car has added")
        }
    },2000)
}
function PremiumCustomer(name,discount){
    Customer.call(this,name)
    this.discount=discount;
}
function calculate(car,days,isPremium){
    // this.car=car
    // this.days=days
    let base=50
    let total=base*days
    if(isPremium){
        total=total-(total*(10/100))
    }
    else{
        total=total
    }
    return total
}
function Maintenance(car,delay){
    setTimeout(()=>{
        car.isAvailable=true
    },delay)
}
let car1=new Car("Toyota","Fortuner",2022)
let car2=new Car("KIA","Seltos",2023)
car2.display()
let customer1=new Customer("Mani")
console.log(customer1)
customer1.rentforcars(car1)
console.log(customer1.rentedCars)
let premium1=new PremiumCustomer("Karthik",10)
console.log(premium1)
Maintenance(car1,1000)
customer1.returncars(car1)
let rental=calculate(car1,5,true)
console.log(rental)



