const employees = [
  { name: "John", position: "Software Engineer", salary: 60000, yearsOfExperience: 5, isEligibleForPromotion: true },
  { name: "Alice", position: "Designer", salary: 45000, yearsOfExperience: 2, isEligibleForPromotion: false },
  { name: "Bob", position: "Project Manager", salary: 70000, yearsOfExperience: 6, isEligibleForPromotion: true },
  { name: "Charlie", position: "Developer", salary: 50000, yearsOfExperience: 3, isEligibleForPromotion: true },
 {name:"Eve",position:"HR",salary:55000,yearsOfExperience:4,isEligibleForPromotion:false}
];

const result1=employees.filter((employee)=>
    employee.salary>50000 && employee.yearsOfExperience>3 &&
    employee.isEligibleForPromotion===true
).map((emp)=>(
       {name: emp.name,
       position: emp.position,
       PromotionStatus:"Eligible for Promotion"}
))

const result2=employees.filter((employee)=>employee.salary>50000 && employee.yearsOfExperience>=1 && employee.isEligibleForPromotion!==true).map((emp)=>(
    {name:emp.name,
    position:emp.position,
    PromotionStatus:"Not Eligble For Promotion"
    }
    ))
    
console.log(result1)
console.log(result2)

const finalresult=[...result1,...result2]
console.log(finalresult)
const sort=finalresult.sort((a,b)=>
{if(a.PromotionStatus=="Eligible For Promotion" && b.PromotionStatus!="Eligible For Promotion"){
    return -1
}
return 1
    
})
console.log(sort)
