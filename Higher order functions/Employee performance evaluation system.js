function employee(users){
    
    let filter= users.filter((ele)=>{
        return ele.tasksCompleted>5
    })
    // let arr=[]
    let maps=filter.map((ele)=>{
        let ans=""
        if(ele.rating>4.5){
            ans = {name:ele.name,performance:"Excellent"}
        }
        else if(ele.rating>=3 && ele.rating<=4.5){
            ans = {name:ele.name,performance:"Good"}
        }
        else{
            ans = {name:ele.name,performance:"Needs Improvement"}
        }
        return ans

        
    })
    // let sort=Object.entries(maps).sort()
    maps.sort((a,b)=>a.performance.localeCompare(b.performance ))
    console.log(maps)
    // return maps
    
}
let user=[

    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    
    { name: "Eve", tasksCompleted: 4, rating: 2.8 }
    
    ]
employee(user)