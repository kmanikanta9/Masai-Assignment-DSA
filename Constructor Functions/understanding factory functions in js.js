function createEmployee(name,role,salary){
    let employee={}
    employee.name=name;
    employee.role=role;
    employee.salary=salary;
    employee.introduce=function(){
        console.log(`Hello, I am ${this.name}, working as a ${this.role} `)
    }
    return employee

}
const employee1=createEmployee("Alice","Developer",60000)
employee1.introduce()