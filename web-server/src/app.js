const path=require('path');

const express=require('express');

const app=express();
const publicDirPath=path.join(__dirname,'../public');

app.use(express.static(publicDirPath));

app.get('',(req,res)=>{
    res.send('Hello express!');
})


app.get('/weather',(req,res)=>{
    res.send({
        forecast:'Danish',
        location:'Delhi'
    });
});


app.listen(3000,()=>{
    console.log('Server is up and running on port 3000.!')
});