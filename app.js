const request = require("request");
const geocode=require('./utils/geocode');
const forecast=require('./utils/forecast');

const inputLocation=process.argv[2];

if(inputLocation){
    //Geocode
geocode(inputLocation,(error,{location,latitude,longitude}={})=>{
    if(error){
        return console.log(error);
    }
    console.log(location);
    //Forecast
    forecast(latitude,longitude,(error,{current})=>{
        if(error){
            return console.log(error);
        }
        console.log('Current temperature is '+current.temperature +', but it feels like '+current.feelslike);
    });
})
}
else{
    console.log('Please enter location.')
}



