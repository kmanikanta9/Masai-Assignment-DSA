function tasks(task,status){
    let tasksimplement=[];
    let arr=[]
    let add={task:task,status:"pending"}
    tasksimplement.push(add)
    return tasksimplement.map((ele)=>{
        if (ele.task=="gaming" || ele.task=="blog" ||ele.task=="trecking" || ele.task=="writing"){
               (ele.status="completed")
        }
        else{
            (ele.status="pending")
        }
    console.log(tasksimplement)
    })
    .sort((a,b)=>a.task(localeCompare(b.task)))
    .reduce((acc,cur)=>{
        if(acc[cur]){
            acc[cur]+=1
        }
        else{
            acc[cur]=1
        }
        return acc
    },{})



    
    

   
    



  

    





}
tasks("reading")
tasks("gaming")
tasks("blog")
tasks("trecking")
tasks("writing")
tasks("listening")
tasks("walking")
tasks("swimming")