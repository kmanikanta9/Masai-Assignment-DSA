function fact(n){
    if (n*1>-1){
        if (n==1 ||n==0){
            return 1
        }
        return n*fact(n-1)
    }
    else{
        return `invalid input`
    }
}
console.log(fact('fkkd'))
console.log(fact(5))