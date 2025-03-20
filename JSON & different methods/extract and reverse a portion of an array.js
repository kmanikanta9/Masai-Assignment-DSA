function extractAndReverse(A){
    k1=2
    k2=4
    let reverse=A.slice(k1,k2).reverse()
    A.splice(k1,reverse.length,...reverse)
    console.log(A)

}
let arr=[15,30,45,60,75,90]
extractAndReverse(arr)