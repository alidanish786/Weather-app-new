const path=require('path');

const express=require('express');

const app=express();
const publicDirPath=path.join(__dirname,'../public');
// app.set('views', path.join(__dirname, '../views'));

app.set('view engine','hbs');

app.use(express.static(publicDirPath));

app.get('',(req,res)=>{
    // res.send('Hello express!');
    res.render('index',{
        title:'Heading',
        name:'Created by me'
    });
})

app.get('/about',(req,res)=>{
    res.render('about',{
        name:'About',
        createdby:'Created by Danish'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        name:'Danish',
        createdby:'Kane'
    })
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