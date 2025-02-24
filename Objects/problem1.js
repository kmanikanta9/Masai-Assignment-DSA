function seniorcitizen(age){
    let res=(age>=60)? "Eligible for Senior Discount":(age<0)? "Invalid age": "Not Eligible for the Senior Discount";
    return res
}
console.log(seniorcitizen(65))
console.log(seniorcitizen(-1))