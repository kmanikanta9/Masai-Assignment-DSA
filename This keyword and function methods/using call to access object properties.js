function personInfo(user){
    console.log(`Name: ${this.name}, Age: ${this.age}`)
}
let obj={name:"Manikanta",age:21}
personInfo.call(obj)