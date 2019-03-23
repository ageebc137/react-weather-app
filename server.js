require('dotenv').config();

// requiring packages
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');
const path = require('path');

// Requesting express app 
const app = express();

const port = process.env.PORT || 5000;



// Use cors() in order to achieve cross origin access with React client.
app.use(cors());
//bodyParser allows requests made to server API to convert data to json
app.use(bodyParser.json()); 

// Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));


// build mode
app.post('/getweather', ( req, res) => {

  let city; 
  const location = req.body.location, regex = /[0-9]/;
  const apiQuery = location.match(regex) ? `postalCode=${location}` : `locality=${encodeURIComponent(location)}`;

  const apiURL = `http://dev.virtualearth.net/REST/v1/Locations?${apiQuery}&maxResults=1&key=${process.env.BING_API_KEY}`;
  
  // Gets the locality of the zipCode or city name
  axios.get(apiURL).then((response) => {
    city = response.data.resourceSets[0].resources[0].address.locality;
    const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API}`;

    return axios.get(weatherURL);
  })
  .then((response) => {
    let weatherData = response.data;
    res.send({weatherData, city});
  })
  .catch((err) => {
    res.sendStatus(404);
  });

});



app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/public/index.html'));
});

app.listen(port, () => console.log(`App is listening on port ${port}`));
