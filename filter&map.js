
const students = [
  { name: "Aanya", subject: "math", score: 82 },
  { name: "Ravi", subject: "science", score: 91 },
  { name: "Neha", subject: "history", score: 88 },
  { name: "Imran", subject: "science", score: 73 },
  { name: "Tanvi", subject: "science", score: 80 },
  {name:"karan",subject:"social",score:92}
];
    const result=students.filter((stu)=>stu.subject==="science" && stu.score>75).map((stu)=>stu.name)
    console.log(result)
    for(let i=0;i<students.length;i++){
        if(students[i].subject==="science" && students[i].score>75){
            console.log(students[i].name)
        }
    }
