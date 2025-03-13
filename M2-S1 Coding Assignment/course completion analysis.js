function course(students){
    let fill=students.filter((ele)=>{
        let percentage=(ele.completedLessons/ele.totalLessons)*100;
        return percentage>=50
    })
    let maps=fill.map((ele)=>{
        let percen=(ele.completedLessons/ele.totalLessons)*100
        ele["CompletionPercentage"]=percen
        return ele
    })
    let avg=maps.reduce((a,b)=>{
        return (a+b)/maps.length.toFixed(2)
    },0)
    let toppers=maps.filter((ele)=>{
        return ele.CompletionPercentage>80
    })
    return toppers

}
const studentsProgress = [
    { name: "Ramesh", completedLessons: 40, totalLessons: 50 },
    { name: "Sita", completedLessons: 25, totalLessons: 50 },
    { name: "Manoj", completedLessons: 30, totalLessons: 60 },
    { name: "Pooja", completedLessons: 48, totalLessons: 50 },
    { name: "Anil", completedLessons: 15, totalLessons: 50 }
  ];
console.log(course(studentsProgress))  