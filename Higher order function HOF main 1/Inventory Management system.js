function Inventory(products){
    return products.filter((ele)=>{
        return ele.stock<100
    })
    .map((ele)=>{
      return  {category:ele.category,name:ele.name,costpricePerUnit:ele.pricePerUnit*(100-ele.stock)}
    })
    
    .reduce((acc,cur)=>{
        (acc[cur.category])?acc[cur.category]+=cur.costpricePerUnit:acc[cur.category]=cur.costpricePerUnit
        return acc

    },{})
}
let product= [

    { name: "Laptop", category: "Electronics", stock: 50, pricePerUnit: 1000 },
    
    { name: "Phone", category: "Electronics", stock: 150, pricePerUnit: 500 },
    
    { name: "T-shirt", category: "Clothing", stock: 40, pricePerUnit: 20 },
    
    { name: "Jeans", category: "Clothing", stock: 90, pricePerUnit: 40 },
    
    { name: "Watch", category: "Accessories", stock: 70, pricePerUnit: 150 } ]
console.log(Inventory(product))