const request = require("request");
const geocode=require('./utils/geocode');
const forecast=require('./utils/forecast');

//Geocode
geocode('Tokyo',(error,data)=>{
    if(error){
        return console.log(error);
    }
    console.log(data.location);
    //Forecast
    forecast(data.latitude,data.longitude,(error,data)=>{
        if(error){
            return console.log(error);
        }
        console.log('Current temperature is '+data.current.temperature +', but it feels like '+data.current.feelslike);
    });
})


