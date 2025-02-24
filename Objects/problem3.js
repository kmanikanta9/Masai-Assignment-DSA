let studentScores={John:85,Emma:92,Sam:67,Bob:45}
for(let key in studentScores){
    if(studentScores[key]>=90){
        studentScores[key]="A"
    }
    else if(studentScores[key]>=80 && studentScores[key]<90){
        studentScores[key]="B"
    }
    else if(studentScores[key]>=70 && studentScores[key]<80){
        studentScores[key]="C"
    }
    else if(studentScores[key]>=60 && studentScores[key]<70){
        studentScores[key]="D"
    }
    else{
        studentScores[key]="F"
    }
}
console.log(studentScores)