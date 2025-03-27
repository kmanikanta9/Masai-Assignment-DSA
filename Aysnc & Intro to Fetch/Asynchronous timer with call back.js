function timer(duration,onComplete){
    setTimeout(()=>{
        onComplete(`Timer of ${duration} ms`)
    },duration)
}
timer(5000,(data)=>{
    console.log(data)
})