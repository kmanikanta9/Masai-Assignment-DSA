function outerFunction(){
    let message="";
    return function inner(){
        message+="correct message"
        console.log(message)
    }
}
let call=outerFunction()
call()