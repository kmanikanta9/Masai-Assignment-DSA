function processProducts(users){
    let arr=[]
    users.map((ele)=>{
        arr.push(ele.name)
    })
    users.forEach((ele,i)=>{
            if(ele.price>50){
                let ans = `${arr[i]} is above $${50}`
                console.log(ans)
            }
            else{
                let ans = `${arr[i]} is below $${50}`
                console.log(ans)
            }
    })

}


let user=[{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }]
processProducts(user)
