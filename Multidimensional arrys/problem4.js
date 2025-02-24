let N=5
for(let i=0;i<N;i++){
    pattern=""
    for(let j=0;j<N;j++){
        if(i==0 || i==N-1 || j==0){
            pattern+="*"
        }
        else{
            pattern+=" "
        }
    }
    console.log(pattern)
}