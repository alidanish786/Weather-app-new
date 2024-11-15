const request=require('request');

const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/search/geocode/v6/forward?q='+address+'&access_token=pk.eyJ1IjoiaGl0bWFuMjAwNiIsImEiOiJja28ybWN2ZjYwM2RnMndtdXd3cHN1OXg5In0.8VpR-poOVftYQB8X2C1arA';
    if(address){

        request({url:url,json:true},(error,response)=>{
            if(error){
                callback('Error while connecting Geoservice',undefined);
            }
            else if(response.body.features.length==0){
                callback('Unable to process with given input.. try another search',undefined)
            }
            else{
                callback(undefined,{
                    latitude: response.body.features[0].properties.coordinates.latitude,
                    longitude:response.body.features[0].properties.coordinates.longitude,
                    location:response.body.features[0].properties.full_address
                });               
            }
        });
    }
}

module.exports=geocode;