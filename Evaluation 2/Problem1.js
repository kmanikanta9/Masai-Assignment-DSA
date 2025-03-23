function createStudentManager(){
    let arr=[]
    let arr1=[]
    return {
        addStudent:function(student){
            let add={Name:student.Name,scores:student.scores}
            arr.push(add)
            return arr
        },
        updateScore:function(person,subject,newscore){
            let up=arr.forEach((ele)=>{
                if(ele.Name==person){
                    if(ele.scores.Maths=="Maths"){
                         ele.scores.Maths=newscore
                    }
                    else if(ele.scores==subject){
                         ele.scores.science=newscore
                    }
                    else if(ele.scores==subject){
                         ele.scores.Telugu=newscore
                    }
                    else if(ele.scores==subject){
                        ele.scores.English=newscore
    
                    }
                }
                
            })
            return up
        
        },
        getStudentDetails:function(person1){
            return arr.forEach((ele)=>{
                let found=(ele.Name==person1)
                if(found){
                    arr1.push(ele)
                }
        
            if(arr1.length>0){
                console.log(arr1)
            }
            else{
                console.log("Student not found")
            }   
            })
                  
            
        },
        addSubject:function(person,sub,score){
            let marks= arr.map((ele)=>{
                if(ele.Name==person){
                    ele.scores+={"sub":score}
                }
                
            })
            return marks

        },
        sorted:function(){
            return arr.forEach((ele)=>{
                return ele.Name.localeCompare(ele.Name)
            })
        },
        average:function(){
            return arr.forEach((ele)=>{
                return ele.scores
            })
        }

        
 
    }  
}

let student={Name:"Mani",scores:{"Maths":90,"science":80,"Telugu":90,"English":87}}
let student1={Name:"Karthik",scores:{"Maths":65,"science":60,"Telugu":80,"English":87}}
let studentdetails=createStudentManager()
studentdetails.addStudent(student)
studentdetails.addStudent(student1)
console.log(studentdetails.updateScore("Mani","Maths",100))
console.log(studentdetails.addStudent(student))
studentdetails.getStudentDetails("Mani")
studentdetails.getStudentDetails("Karthik")
