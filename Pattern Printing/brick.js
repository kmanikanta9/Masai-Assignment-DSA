for(let i=1;i<=4;i++){
    let pattern=""
    for(let j=1;j<=5;j++){
        if(i%2!=0 && j%2!=0){
            pattern+="[]"+" "
        }
    }
    for(let k=1;k<=5;k++){
        if(i%2==0 && k%2==0){
            pattern+="[]"
        }
        else{
            pattern+=" "
        }
    }
    console.log(pattern)
}