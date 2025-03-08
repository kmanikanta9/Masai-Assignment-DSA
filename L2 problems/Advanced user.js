function Management(user){
    if(user.role=="admin"){
         res=(user.active==true && user.experience>5 && user.department=="IT")?"Full IT Admin Access":(user.active==true && user.experience>5 && !(user.department=="IT"))?"Full General Admin Access":(user.active==true && user.experience<=5)?"Limited Admin Access":"Admin Access Revoked"
    }
    else if(user.role=="manager" && user.active==true){
        res=(user.experience>3 && user.department=="Sales")?"Full Sales Manager Access":(user.experience>3&& !(user.department=="Sales"))?"Full Manager Access":(user.experience<=3)?"Limited Manager Access":"Manager Access Revoked"
    }
    else if(user.role=="user"){
        res=(user.active==true && user.department=="Support")?"Priority Support Access":(user.active==true && !(user.department=="Support"))?"User Access":"User Access Revoked"
    }
    else{
        return "Invalid Role"
    }
    return res  
}
let person1 = { role: "admin", experience: 7, active: true, department: "IT" };
let person2 = { role: "manager", experience: 4, active: true, department: "Marketing" };
let person3 = { role: "user", experience: 2, active: true, department: "Support" };
let person4 = { role: "admin", experience: 3, active: false, department: "Finance" };


console.log(Management(person1))
console.log(Management(person2))
console.log(Management(person3))
console.log(Management(person4))