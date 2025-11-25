const express = require ('express');
const app = express(); 
const port=8080; 

app.get('/', (req ,res)=>{
   res.send('This is my first server'); 
})

app.get('/about', (req ,res)=>{
   const students = [ 
    {id:1, name:'John Doe'},
    {id:2, name:'Jane Smith'},
    {id:3, name:'Alice'},
    {id:4, name:'Bob'}
   ]
    res.json(students);
})



app.listen(port,()=> {
    console.log(`Server is running on http://localhost:${port}`);
})