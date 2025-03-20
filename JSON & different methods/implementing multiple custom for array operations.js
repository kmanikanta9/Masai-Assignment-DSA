function operations(user,user2){
    let even=[]
    return {
        filterEvenNumbers:function (){
            even=user.filter((ele)=>{
                return ele%2==0
            })
            return even
            
        },
        sumOfArray:function(){
            let sum=even.reduce((acc,cur)=>{
                return acc+cur
            },0)
            return sum
        },
        sortAndConcat:function(){
            let sort1=even.sort((a,b)=>a-b)
            let sort2=user2.sort((a,b)=>a-b)
            let con= sort1.concat(sort2)
            return con
          
        }
        
    }
    
}
let arr=[1,2,3,45,6,6,8]
let arr1=[1,2,46,7,8,97]
let operation=operations(arr,arr1)
console.log(operation.filterEvenNumbers())
console.log(operation.sumOfArray())
console.log(operation.sortAndConcat())