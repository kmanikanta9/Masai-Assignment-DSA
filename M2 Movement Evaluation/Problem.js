function processorder(orderID,callback){
    setTimeout(()=>{
        callback(`Order ${orderID} processed successfully`)
    },3000)

}
processorder(101,(data)=>{
    console.log(data)
})