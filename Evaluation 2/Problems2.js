function Task_Manager(){
    let arr=[]
    return {
        addTask: function(title){
            let add={task:title.task,id:title.id,status:false}
            arr.push(add)
            return arr
        },
        getAllTasks:function(){
            return JSON.stringify(arr)
        },
        markComplete:function(ids){
            let found=arr.forEach((ele)=>{
                if(ele.id==ids){
                    ele.status=true
                }
            })
            return found
        },
        removeTask:function(taskId){
            let remove=arr.forEach((ele)=>{
                if(ele.id==taskId){
                    
                }
            })
            return remove
        },
        pending:function(idss){
            return arr.forEach((ele)=>{
                if(ele.id==idss){
                    ele.status="pending"
                }
            })
        },

        getPendingTasks:function(){
            return arr.filter((ele)=>{
                if(ele.status=="pending"){
                    return ele
                }
            })
        },
        getCompletedTasks:function(){
            let complete=arr.filter((ele)=>{
                return ele.status==true
            })
            return complete
            .map((ele)=>{
                return ele
            })
        },
        sortTasks:function(){
            return arr.map((ele)=>{
                return ele.task
            })
            
        }
        
        
    }
}
let taskses={task:"reading",id:101,status:true}
let taskses1={task:"writing",id:102,status:false}
let taskses2={task:"listening",id:103,status:true}
let taskses3={task:"speaking",id:104,status:false}


let tasks=Task_Manager()
console.log(tasks.addTask(taskses))
console.log(tasks.addTask(taskses1))
console.log(tasks.addTask(taskses2))
console.log(tasks.addTask(taskses3))
console.log(tasks.getAllTasks())
tasks.markComplete(104)
tasks.markComplete(101)
console.log(tasks.getAllTasks())
tasks.pending(102)
tasks.pending(103)
console.log(tasks.getAllTasks())
console.log(tasks.getPendingTasks())
console.log(tasks.getCompletedTasks())
console.log(tasks.sortTasks())

