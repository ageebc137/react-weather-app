var skycons = new Skycons({"color": "#E5E5E5"});
// on Android, a nasty hack is needed: {"resizeClear": true}

let currentState = 'sunny';

// you can add a canvas by it's ID...
skycons.add("weather-icon", Skycons.CLEAR_DAY);
// CLEAR_DAY
// CLEAR_NIGHT
// PARTLY_CLOUDY_DAY
// PARTLY_CLOUDY_NIGHT
// CLOUDY
// RAIN
// SLEET
// SNOW
// WIND
// FOG

// In order to connect the Skycons with React, this funciton will be set
// to setInterval to update the weather-icon;
function checkWeatherIcon() {
    const description = document.getElementById('weather-icon').dataset.description;
    if (currentState !== description) {
        currentState = description;
        if (description.includes('clear')) {
            skycons.set('weather-icon', Skycons.CLEAR_DAY) ;
        }else if (description.includes('rain')) {
            skycons.set('weather-icon', Skycons.RAIN);
        }else if (description.includes('snow')) {
            skycons.set('weather-icon', Skycons.SNOW);
        }else if (description.includes('few') || description.includes('scattered')) {
            skycons.set('weather-icon', Skycons.PARTLY_CLOUDY_DAY);
        }else if (description.includes('fog') || description.includes('haze')|| description.includes('mist')) {
            skycons.set('weather-icon', Skycons.FOG);
        }else if (description.includes('wind')) {
            skycons.set('weather-icon', Skycons.WIND);
        }else if (description.includes('cloud')) {
            skycons.set('weather-icon', Skycons.CLOUDY);
        }
    }

}

setInterval(checkWeatherIcon, 1000);

// start animation!
skycons.play();