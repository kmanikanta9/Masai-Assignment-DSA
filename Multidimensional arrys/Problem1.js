let arr=[[1,2],[3,4],[5,6]];
let N=3;
let M=2;
for(let i=0;i<N;i++){
    let bag=""
    for(let j=0;j<M;j++){
        bag=bag+arr[i][j]+" "
    }
    console.log(bag)
}