let myFetch=fetch("https://jsonplaceholder.typicode.com/users")
myFetch.then((data)=>{
    return data.json()
}).then((res)=>{
    findComplexWebsiteUsers(res)
})
function findComplexWebsiteUsers(res){
    res.forEach((ele)=>{
        console.log(ele)
    })
    let fill=res.map((ele)=>{
        return (ele.website).split(".")
        
    })
    console.log(fill)
    let count1=0;
    for(let i=0;i<fill.length;i++){
        count1++
    }
    console.log(count1)
    
    let count=fill.reduce((acc,cur)=>{
        return acc+cur
    },0)
    console.log(count)


}