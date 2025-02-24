let arr=[[1,2,3,4,5],[6,7,8,9,1],[3,2,5,4,6],[7,8,9,1,2]]
let N=4
let M=5
let res=""
for(let i=0;i<arr.length;i++){
    if(i%2==0){
        for(let j=arr[i].length-1;j>=0;j--)
            res+=arr[i][j]+" "
    }
    else{
        for(let k=0;k<arr[i].length;k++){
            res+=arr[i][k]+" "
        }
    }
    
}
console.log(res)