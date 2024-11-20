const path=require('path');

const express=require('express');

const app=express();

//Define paths for express config
const publicDirPath=path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'../templates');


//Setup handlebars engine and view location
app.set('view engine','hbs');
app.set('views',viewsPath);

//Setup static directory to serve
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