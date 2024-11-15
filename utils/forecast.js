const request=require('request');

const forecast=(lat,long,callback)=>{
    const url='https://api.weatherstack.com/current?access_key=f3212a27055c3e424f9062bb6bddbd0c&query='+lat+','+long+'&units=f';
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('There is some error..',undefined);
            // console.log('There is some error..');
        }
        else if(body.error){
            callback('Unable to find location..',undefined);
            // console.log('Unable to find location..');
        }
        else{
            callback(undefined,body);
            // const data=(response.body);
            // console.log('Current temperature is '+data.current.temperature +', but it feels like '+data.current.feelslike);
        }
    });
}

module.exports=forecast;