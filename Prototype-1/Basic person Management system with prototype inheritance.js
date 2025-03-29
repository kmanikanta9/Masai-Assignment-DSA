class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
Person.prototype.introduce=function(){
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`)
}
class Employee extends Person{
    constructor(name,age,jobtitle){
        super(name,age)
        this.jobtitle=jobtitle

    }
}
Employee.prototype.work=function(){
    console.log(`${this.name} is working as a ${this.jobtitle}`)
}
let person1=new Person("Mani",21)
person1.introduce()
let employee1=new Employee("Mani",21,"Developer")
employee1.work()