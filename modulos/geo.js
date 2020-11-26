const request = require('postman-request');
const reverseGeocode = (coordenada, callback)=>{
  let urlLatLon = `https://us1.locationiq.com/v1/reverse.php?key=pk.27201fbaf715051008db3ecc29bba6ef&lat=${coordenada.lat}&lon=${coordenada.lon}&format=json`;

  request(urlLatLon, (error,response,body)=>{
    if(error){
      callback('Ocurrio un error en la busqueda', undefined);
    }
    else{
      let data = JSON.parse(body);
      callback(undefined,{
        road: data.address.road,
        neighborhood: data.address.neighborhood,
        county: data.address.county,
        state: data.state,
        country: data.address.country,
        postcode: data.address.postcode
      });
    }
  });
}
module.exports = reverseGeocode;