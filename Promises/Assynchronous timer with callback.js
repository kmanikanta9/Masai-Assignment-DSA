function timer(duration,onComplete){
    setTimeout(()=>{
        onComplete(`Timer of ${duration} ms finished`)
    },duration)
}

timer(5000,(data)=>{
    console.log(data)
})