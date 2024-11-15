const request = require("request");
const geocode=require('./utils/geocode');
const forecast=require('./utils/forecast');

//Geocode
geocode('Tokyo',(error,data)=>{
    console.log(data);
})

//Forecast
forecast('28.613895','77.209006',(error,data)=>{
    console.log(error);
    console.log(data);
});

