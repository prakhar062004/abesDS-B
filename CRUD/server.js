import express from 'express';
const app =express();
const port=8080; 

app.use(express.json()); 
const students=[ 
    {id:1, name:'John Doe' , class:'10th'},
   
];



app.get('/', (req ,res)=>{
    try {
        res.status(200).json({message: "Show all students" ,data :students});
    }
    catch (error){
        res.status(500).json({message: "Internal Server Error",error: error.message});
    }
})

//Search data for student 

app.get ('/:id', (req ,res)=>{
    try {
        const id = req.params.id; 
        const student = students.find(s=>s.id);
        if (!student){
            return res.status(404).json({message: "Student not found", data: student});
        }
        
         return res.status(200).json({message: "Student found", data: student} );
    
       }
       catch (error) { 
        res.status(500).json({message: "Internal Server Error", error: error.message});
       }
})

// Create Data

app.post('/', (req ,res)=>{
     try {
        const newStudent={
            id: students.length +1,
            ...req.body 
         };
            students.push(newStudent);
            res.status(201).json({message: "Student created succesfully", data: newStudent});
        }
        catch (error){
            res.status(500).json({message: "Internal Server Error", error: error.message});
        }
})

//Edit Data

app.put('/edit/:id', (req ,res)=>{
   try {
    const id = req.params.id;
    const studentIndex = students.find(s=>s.id); 
    if (studentIndex === -1){
        return res.status(404).json({message: "Student not found"});
     }
      students[studentIndex]= {
    ...students[studentIndex],
    ...res.body,
     }
        res.status(200).json({message: "Student updated successfully", data: students[studentIndex]});
   }
  
   catch (error){
        res.status(500).json({message: "Internal Server Error", error: error.message});
   }

})

//Delete Data

app.delete('/delete/:id', (req ,res)=>{
       try {
        const id = req.params.id;
        const studentIndex = students.find(s=>s.id); 
        if (studentIndex === -1){
        return res.status(404).json({message: "Student not found"});
        }
        students.splice(studentIndex, 1);
        res.status(200).json({message: "Student Data deleted successfully"});
       }
       catch (error){
        res.status(500).json({message: "Server Error", error: error.message});
       }
    })




app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})