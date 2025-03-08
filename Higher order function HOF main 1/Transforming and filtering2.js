function processProducts(users){
    return users.map((ele)=>{
        if (ele.price>50){
           return  `${ele.name} is above $50`
        }
        else{
            return `${ele.name} is below $50`
        }
    })
    .forEach((ele)=>{
        console.log(ele)
    })
}
let user= [{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }]
processProducts(user)