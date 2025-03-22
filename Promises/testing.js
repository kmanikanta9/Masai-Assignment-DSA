function task1(){
    return new Promise((resolve)=>{
        console.log("Starting Task 1")
        setTimeout(()=>{
            console.log("Task 1 complete")
            resolve()
        },1000)
    })
}
function task2(){
    return new Promise((resolve)=>{
        console.log("Starting Task 2")
        setTimeout(()=>{
            console.log("Task 2 complete")
            resolve()
        },1000)
    })
}
function task3(){
    return new Promise((resolve, reject) => {
        console.log("Starting Task 3")
        setTimeout(()=>{
            console.log("Task 3 complete")
            resolve()
        },1000)
    })
}
function task4(){
    return new Promise((resolve)=>{
        console.log("Starting Task 4")
        setTimeout(()=>{
            console.log("Task 4 complete")
            resolve()
        },1000)
    })
}
task1()
    .then(task2)
    .then(task3)
    .then(task4)
    .then(()=>{
        console.log("All tasks complted")
    })