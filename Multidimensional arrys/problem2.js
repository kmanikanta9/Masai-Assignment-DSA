let arr=[[1,2],[3,4],[5,6]];
let N=3;
let M=2;
for(let i=0;i<N;i++){
    bag1=""
    for(let j=0;j<M;j++){
        bag=0
        bag+=i+j
        bag1+=bag+" "
    }
    console.log(bag1)
}
