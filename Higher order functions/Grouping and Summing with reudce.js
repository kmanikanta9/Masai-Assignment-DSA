function occurences(users){
    return users.reduce((obj,cur)=>{
        if(obj[cur]){
            obj[cur]+=1
        }
        else{
            obj[cur]=1
        }
        return obj
    },{})
    
}
let user=["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]
console.log(occurences(user))