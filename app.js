const request = require("request");

// const url='https://api.weatherstack.com/current?access_key=f3212a27055c3e424f9062bb6bddbd0c&query=37.8267,-122.4233&units=f';

// request({url:url,json:true},(error,response)=>{
//     // console.log(error)
//     if(error){
//         console.log('There is some error..');
//     }
//     else if(response.body.error){
//         console.log('Unable to find location..');

//     }
//     else{
//         const data=(response.body);
//         console.log('Current temperature is '+data.current.temperature +', but it feels like '+data.current.feelslike);
//     }
// })

const geoCode =
  "https://api.mapbox.com/search/geocode/v6/forward?q=&&&66&access_token=pk.eyJ1IjoiaGl0bWFuMjAwNiIsImEiOiJja28ybWN2ZjYwM2RnMndtdXd3cHN1OXg5In0.8VpR-poOVftYQB8X2C1arA";

request({ url: geoCode, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to process request..");
  } else if (response.body.features.length==0) {
    console.log(
      "Error code:" +
        response.body.error +
        ".Unable to process with given input.. try another search"
    );
  } else {

    console.log(response.body);

    const latitude = response.body.features[0].properties.coordinates.latitude;
    const longitude =
      response.body.features[0].properties.coordinates.longitude;

    console.log(
      "The latitude is: " + latitude + " and longitude is: " + longitude
    );
  }
});
