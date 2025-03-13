const athletes = [
    { name: "Virat", sport: "Cricket", scores: [89, 75, 102], age: 35 },
    { name: "Sindhu", sport: "Badminton", scores: [21, 19, 25], age: 29 },
    { name: "Neeraj", sport: "Javelin", scores: [88, 90, 85], age: 26 }
  ];
let neer={age:27,"worldChampion":true}
let [{name:firstname,sport:firstsport}]=athletes
console.log(`${firstname} plays ${firstsport}`)  
let neeraj=athletes[2]
let {scores}=neeraj
another=scores[2]
console.log(scores[0],scores[1],[another])
let merge={...neeraj,...neer}
console.log(merge)
res=[]
athletes.forEach((ele)=>{
    for (let i=0;i<ele.scores.length;i++){
        res.push(ele.scores[i])
    }
    
})
console.log(res)