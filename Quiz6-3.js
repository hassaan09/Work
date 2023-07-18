const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob&quot", grade: 70 },
    { name: "Charlie&quot", grade: 85 },
    { name: "David&quot", grade: 95 },
    ];

    const newstudents  = students.filter((num)=>
    {
        return num.grade>80;
    })
    console.log(newstudents);