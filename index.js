// index.js

const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});

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


const coords =  {latitude: 45.3431, longitude: -75.8291 };
fetchISSFlyOverTimes(coords, (error, results) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned flyover times:' , results);
});
*/

