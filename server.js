require('dotenv').config();

// requiring packages
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');

// Requesting express app 
const app = express();

const port = process.env.PORT || 5000;

// Use cors() in order to achieve cross origin access with React client.
app.use(cors());
//bodyParser allows requests made to server API to convert data to json
app.use(bodyParser.json()); 

app.post('/getweather', ( req, res) => {
  const location = req.body.location;

  const apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.OPENWEATHER_API}`;

  axios.get(apiURL).then((response) => {
    res.send(response.data)
  });

});

app.listen(port, () => console.log(`App is listening on port ${port}`));
