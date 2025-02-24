let arr=[[1,2,3],[4,5,6],[7,8,9]];
let M=3
let N=3
let res1=""
let res2=""
let res3=""
let res4=[]
for(let i=arr.length-1;i>=0;i--){
    for(let j=0;j<arr[i].length;j++){
        if(j==0){
            res1+=arr[i][j]+" "
        }
        if(!(i==0 && j==0) && i==0){
            res2=res2+arr[i][j]+" "
        }
        if(!(i==N-1 && j==0) && !(i==N-1 && j==N-1) && i==N-1){
            res4.push(arr[i][j])
        }
    }
}
for(let i=0;i<arr.length;i++){
    for(j=0;j<arr[i].length;j++){
        if(!(i==0 && j==N-1) && j==N-1){
            res3=res3+arr[i][j]+" "
        }
    }
}
let res5=""
for(let i=res4.length-1;i>=0;i--){
    res5+=res4[i]+" "
}
console.log(res1+res2+res3+res5)
