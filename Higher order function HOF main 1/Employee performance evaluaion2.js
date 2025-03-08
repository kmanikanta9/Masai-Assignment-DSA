function performance(users){
    return users.filter((ele)=>{
        return ele.tasksCompleted>5
    })
    .sort((a,b)=>b.rating-a.rating)
    .map((ele)=>{
        return (ele.rating>4.5)?{name:ele.name,performance:"Excellent"}:(ele.rating>=3 && ele.rating<=4.5)?{name:ele.name,performance:"Good"}:{name:ele.name,performance:"Needs Improvement"}
    })
    .filter((ele)=>{
        return (ele.performance!=="Needs Improvement")
    })
}
let user= [

    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    
    { name: "Eve", tasksCompleted: 7, rating: 2.8 }
    
    ]

console.log(performance(user))