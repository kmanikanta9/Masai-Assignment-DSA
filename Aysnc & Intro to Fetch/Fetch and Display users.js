let myFetch=fetch("https://jsonplaceholder.typicode.com/users")
myFetch.then((data)=>{
    return data.json()
})
.then((res)=>{
    let narr=res.map((ele)=>{
        return ele.name
    })
    console.log(narr)
})