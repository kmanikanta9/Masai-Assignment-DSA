function userRole(user){
    let res=(user.role=="admin"&&user.active==true)?"Admin Access Granted!":(user.role=="admin"&&user.active==false)?"Admin Access Revoked":(user.role=="user"&&user.active==true)?"User Access Granted!":(user.role=="user"&&user.active==false)?"User Access Revoked":"Access Denined";
    return res
}
let user1={name:"Alice",role:"admin",active:false}
let user2={name:"Bob",role:"user",active:true}
console.log(userRole(user1))
console.log(userRole(user2))