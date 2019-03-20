require('dotenv').config();

const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

const port = process.env.PORT || 5000;
console.log(process.env.BING_API_KEY);


app.use(cors());

app.get('/getweather', (req, res) => {
  axios.get('http://dev.virtualearth.net/REST/v1/Locations?countryRegion={countryRegion}&adminDistrict={adminDistrict}&locality={locality}&postalCode={postalCode}&addressLine={addressLine}&userLocation={userLocation}&userIp={userIp}&usermapView={usermapView}&includeNeighborhood={includeNeighborhood}&maxResults={maxResults}&key={BingMapsKey}')
});

app.listen(port, () => console.log(`App is listening on port ${port}`));
