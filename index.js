// index.js
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

/*
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);

  fetchCoordsByIP(ip, (err, coordinates) => {
    if (err) {
      console.log("It didn't work!" , err);
      return;
    }
  
    console.log('It worked! Returned coordinates:' , coordinates);
  })
});
*/

const coords =  {latitude: 45.3431, longitude: -75.8291 };
fetchISSFlyOverTimes(coords, (error, results) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned flyover times:' , results);
});


