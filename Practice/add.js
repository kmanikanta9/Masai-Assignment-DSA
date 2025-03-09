
// let arr=[]
function catergories(product){
    return product.filter((ele)=>{
        return (ele.details.category=="Electronics"&& ele.stock.available==true)
        // return fill
        // return ele.details.category=="Electronics"
    })
    .map((ele)=>{
        let discount=ele.details.price-(ele.details.price*10/100)
        return {id:ele.id,name:ele.details.name,price:ele.details.price, discountPrice:discount,category:ele.details.category}
        // arr.push(add)
    })
}

const products = [
  {
    id: 101,
    details: { name: "Laptop", price: 1200, category: "Electronics" },
    stock: { available: true, quantity: 4 },
    variants: [{ color: "Silver" }, { color: "Black" }]
  },
  {
    id: 102,
    details: { name: "Shoes", price: 150, category: "Fashion" },
    stock: { available: true, quantity: 10 },
    variants: [{ size: "M" }, { size: "L" }]
  },
  {
    id: 103,
    details: { name: "Smartphone", price: 800, category: "Electronics" },
    stock: { available: false, quantity: 0 },
    variants: [{ color: "Blue" }, { color: "Black" }]
  },
  {
    id: 104,
    details: { name: "Monitor", price: 300, category: "Electronics" },
    stock: { available: true, quantity: 2 },
    variants: [{ size: "24-inch" }, { size: "27-inch" }]
  }
];
console.log(catergories(products))




function access(acc){
    return acc.filter((ele)=>{
        return ele.amount>200
    })
    .map((ele)=>{
        return {product:ele.product,amount:ele.amount}
    })
}
const sales = [
    { product: "Laptop", amount: 2500, date: "2025-01-15", customer: "Alice" },
    { product: "Mouse", amount: 30, date: "2025-02-10", customer: "Bob" },
    { product: "Smartphone", amount: 900, date: "2025-02-15", customer: "Charlie" },
    { product: "Keyboard", amount: 150, date: "2025-02-18", customer: "David" },
    { product: "Monitor", amount: 400, date: "2025-02-20", customer: "Eve" },
    { product: "Headphones", amount: 220, date: "2025-02-22", customer: "Frank" }
  ];
  
console.log(access(sales))  



const review = `
  The laptop is amazing! I love it.
  The battery life is excellent, and the price is reasonable.
  Amazing product, highly recommended!
  Laptop is great, but battery could be better.
`;
// console.log(review.length)
// let clean=review.trim("")
let clean=review.trim()
clean = review.split(" ")
// console.log(clean)
let eleremove=["\n","","the","The","and","is","but","to","a","it","be"]
let ans = clean.filter((ele,i)=>{
    return (eleremove.includes(ele)==false)
})
// console.log(ans)
let str=["\n","!",".",",","it"]
let ans1=[]
let ans2=[]
for(let i=0;i<ans.length;i++){
    for(let j=0;j<ans[i].length;j++){
        if(str.includes(ans[i][j])){
            ans1.push(ans[i])
        }
        // else{
        //         if(ans2.includes(ans[i])==false){
        //             ans.push(ans[i])
        //         }
        // }
    }
}
// console.log(ans1)
// console.log(ans2)
let answer=[]
for(let i=0;i<ans1.length;i++){
    let res=""
    for(let j=0;j<ans1[i].length;j++){
        if(str.includes(ans1[i][j])==false ){
            res+=ans1[i][j]
        }
    }
    answer.push(res)
}
// console.log(answer)

let red = answer.reduce((acc,curr)=>{
    if(acc[curr]){
        acc[curr]+=1
    }
    else{
        acc[curr]=1
    }
    return acc
},{})
let last =[]
// console.log(red)
for(let ele of Object.keys(red)){
        let result = {word:ele,count:red[ele]}
        last.push(result)
        // console.log(result)
}

last.sort((a,b)=>(b.count-a.count))
console.log(last)
// red.forEach((ele)=>{
//     let ans= {word:ele}
// })
// let ans1 = ans.filter((ele,i)=>{
//     return (str.includes(ele[i]))
// })
// console.log(ans1)
// let sp=clean.split("")
// console.log(sp)
// let res1=""
// for(let i of sp){
   
//     if(i!="!"){
//         res1+=i
//     }
// }
// res1.split(" ")
// console.log(res1)
// console.log("----------")
// res=""
// for(let key of res1){
//     let fill=["the","is","and","to","it","The","be","but","it.\n",".",","]
//     if(fill.includes(key)==false){
//         res+=key
//     }
// }

// console.log(typeof res)


function createUser(username,password){
    let details=[]
    let value={name:username,password:password}
    details.push(value)
    function login(loginpassword){
        details.forEach((ele)=>{
            if(ele.password==loginpassword){
                console.log("Welcome,"+ele.name+"!")
            }
            else{
                console.log("Incorrect password!")
            }
        })
    }
    function changePassword(oldPassword, newPassword){
        details.forEach((ele)=>{
            if(oldPassword==ele.password){
                ele.password=newPassword
            }
        })

    }
    return {
        login:login,
        changePassword:changePassword
    }
}

const user1 = createUser("alice_01", "AlicePass!");
const user2 = createUser("bob_42", "BobSecure123");

user1.login("wrongPass"); // ❌ "Incorrect password!"
user1.login("AlicePass!"); // ✅ "Welcome, alice_01!"

user1.changePassword("AlicePass!", "NewAlicePass!");
user1.login("AlicePass!"); // ❌ "Incorrect password!"
user1.login("NewAlicePass!"); // ✅ "Welcome, alice_01!"

user2.login("BobSecure123"); // ✅ "Welcome, bob_42!"

