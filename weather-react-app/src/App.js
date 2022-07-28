import React, {useState} from 'react'
import axios from 'axios'

function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const apiKey = '9918678d5e95894d07a7b6807dff8b42';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

  
  const searchLocation = (event) => {
    if (event.key === 'Enter'){
      axios.get(url).then((response) => {
        if (response.data) setData(response.data);
        console.log(response.data);
      }).catch(err => console.log((err.message)));
    }
  }
  return (
    <div className="App"> 
      <div className="container">
        <input 
          className="cityInput"
          type="text"
          value={location}
          onChange={event => setLocation(event.target.value)}
          placeholder="Enter location"
          onKeyPress={searchLocation}>
        </input>
        <div className="top">
          <div className="location margins">
            <h1>{location}</h1>
          </div>
          <div className="temperature margins">
            {data.main ? parseInt(data.main.temp - 270) : 0}°C
          </div>
          <div className="description margins">
            <h1>{data.weather ? data.weather[0].main : null}</h1>
          </div>
        </div>
        <div className="bottom">
          <div className="feels backgroundDarker margins">
            <h1>Feels like: {data.main ? parseInt(data.main.feels_like - 270) : 0}°C</h1>
          </div>
          <div className="humidity backgroundDarker margins">
            <h1>Humidity: {data.main ? data.main.humidity : 0}%</h1>
          </div>
          <div className="windSpeed backgroundDarker margins">
            <h1>Wind: {data.main ? parseInt(data.wind.speed) : 0}kmh</h1>
          </div>
          <div className="pressure backgroundDarker margins">
            <h1>Pressure: {data.main? data.main.pressure : 0}Pa</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
