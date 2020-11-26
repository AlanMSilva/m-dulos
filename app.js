let reverseGeocode = require("../modulos/geo.js")
let geocodeReverse = require('../modulos/geo.js');
let statusClima=require('../modulos/UpdateClima.js')

let coordenada={
  lat: 34.054027,
  lon: -118.241708
}
geocodeReverse(coordenada,(error,dataresponse)=>{
  if(error)
  {
    console.log(console.log('Error'));
  }
  else
  {
    console.log(dataresponse.country);
    statusClima(dataresponse.country,(error,ClimaResponse)=>{
      if(error){
        console.log("Se presentó un T E R R I B L E error xd");
      }
      else{
        console.log(ClimaResponse.temperature);
      }
    });
  }
});