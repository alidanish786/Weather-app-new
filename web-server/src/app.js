const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

const path=require('path');
const port=process.env.PORT||3000;

const express=require('express');

const app=express();

const hbs=require('hbs');

//Define paths for express config
const publicDirPath=path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'../templates/views');
const partialPath=path.join(__dirname,'../templates/partials');

//Setup handlebars engine and view location
app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialPath);

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
 


app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, {current}) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: 'Current temperature is '+current.temperature +', but it feels like '+current.feelslike,
                location,
                address: req.query.address
            })
        })
    })
})


app.get('/help/*',(req,res)=>{
    res.render('PageNotFound',{
        error:'Help artice not found, please try another route'
    })
})

app.get('*',(req,res)=>{
    //res.send('404 page')
    res.render('PageNotFound',{
        error:'Page not found, please try another route!'
    })

})

app.listen(port,()=>{
    console.log('Server is up and running on port'+port)
});