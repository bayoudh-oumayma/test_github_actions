 const express =require('express');
 const app = express();
 const port =4000;
 
 app.get('/',(req,res)=>res.send('<h1> Hello <h1>'));
 app.listen(port,()=>console.log('app is and running on port :',{port}));
