function Animal(type){
    this.type=type;
    
}
Animal.prototype.sound=function(){
    console.log(`${this.type} sound`)
}
function Dog(){
    Animal.call(this,"Dog")
    let obj=Object.create(Animal.prototype)
}

Dog.prototype.sound=function(){
    console.log(`Bark`)
}
let animal=new Animal("Dog")
animal.sound()
let myDog=new Dog()
myDog.sound()