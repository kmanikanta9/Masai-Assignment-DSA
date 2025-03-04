for(let i=1;i<=4;i++){
    let result="";
    for(let j=1;j<=5;j++){
        if(i%2!=0 && j%2!=0){
            result+="[]"+" "
        }
    }
    for(let k=1;k<=5;k++){
        if(i%2==0 && k%2==0){
            result+="[]"
        }
        else{
            result+=" "
        }
    }
    console.log(result)
}