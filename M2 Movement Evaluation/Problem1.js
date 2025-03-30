let myFetch=fetch("https://jsonplaceholder.typicode.com/users")
myFetch.then((data)=>{
    return data.json()
})
.then((data)=>{
    searchUser(data,"Bret")
    searchUser(data,"Mani")
})
function searchUser(data,username){
    let userfind=data.find((ele)=>{
        if(ele.username==username){
            return ele
        }       
    })
    if(userfind){
        console.log(userfind)
    }
    else{
        console.log("User not found")
    }

}