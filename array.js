const users=[
    {name:"Alice",age:21,job:"developer"},
    {name:"Charlie",age:22,job:"designer"},
    {name:"martin",age:24,job:"developer"},
    {name:"Frank",age:26,job:"designer"}
    ]
      const res= users.filter((user)=>user.job==="developer" && user.age>=21).map(user=>user.name)
      console.log(res)

    for(let i=0;i<users.length;i++){
        if(users[i].job==="developer"){
            console.log(users[i].name)
        }
    }
