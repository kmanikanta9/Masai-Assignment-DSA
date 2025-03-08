function group(users){
    return users.reduce((acc,cur)=>{
        if(acc[cur]){
            acc[cur]+=1
        }
        else{
            acc[cur]=1
        }
        return acc

    },{})
}
let user= ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]
console.log(group(user))