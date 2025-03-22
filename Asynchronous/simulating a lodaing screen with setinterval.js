function screener(){
    let count=0
    let screen=setInterval(()=>{
        console.log("Loading.....")
        count++
        if(count==5){
            clearInterval(screen)
            console.log("Loaded Successfully")
        }
    },1000)
}
screener()