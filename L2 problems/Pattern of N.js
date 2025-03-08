let N=3
let res=""
for(let i=1;i<=N*N;i++){
    res+=i+" "
    if(i%3==0){
        res+="\n"
    }
    
}
console.log(res)
