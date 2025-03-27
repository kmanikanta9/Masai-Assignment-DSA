async function getData(){
    try{
        let myFetch=await fetch("https://fakestoreapi.com/products")
        let data=await myFetch.json()
        // console.log(data)
        // console.log(sum(data))
        return data
    }
    catch(err){
        console.log("Failed to fetch products.Please try again later.")
    }
}
getData().then((data)=>{
    console.log(data)
    let sum1=data.reduce((acc,cur)=>{
        acc+=cur.price
        return acc
    },0)
    console.log(sum1)
})
// function sum(data){
//     let sum1=data.reduce((acc,cur)=>{
//         acc+=cur.price
//         return acc
//     },0)
//     return sum1
// }
