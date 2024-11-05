const request=require('request');

const url='https://api.weatherstack.com/current?access_key=f3212a27055c3e424f9062bb6bddbd0c&query=37.8267,-122.4233';

request({url:url,json:true},(error,response)=>{

    //const data=JSON.parse(response.body);
    //console.log(response.body)

    var data=response.body.current;

    console.log('Current temperature is '+data.temperature +', but it feels like '+data.feelslike);
})