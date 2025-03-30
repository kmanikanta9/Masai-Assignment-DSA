let myFetch=fetch("https://jsonplaceholder.typicode.com/users")
myFetch.then((data)=>{
    return data.json()
})
.then((res)=>{
    calculateCompanyEmployees(res)

})
function calculateCompanyEmployees(res){
    let company=res.map((ele)=>{
        return ele.company
        
    })
    let unique=company.map((ele)=>{
        return ele.name
    })
    console.log(unique)
    count1=0
    for(let i=0;i<unique.length;i++){
        if(unique[i]!=unique[i+1]){
            count1++
        }
    }
    console.log(count1)
    let count=unique.reduce((acc,cur)=>{
        acc=acc+cur
        return acc
    },0)
    console.log(count)
}