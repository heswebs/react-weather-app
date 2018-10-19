import React, { Component } from 'react';
import axios from 'axios';
import WeatherToday from './Day';
import Form from './Form';
import weatherImg from './weather.jpg';
import './App.css';


const API_KEY ="f6cfa10c5b1419a83df7421fb039a1f4";


class App extends Component {

  state = {
    city: undefined,
    iconWeather:undefined,
    desc:undefined,
    iconForcast:undefined,
    tempMax: undefined,
    tempMin: undefined
  }



  getWeather = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const d = new Date();
    const daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const currentDay = daysOfWeek[d.getDay()];

    const urlForcast = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}`;
    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`;

    axios.get(urlWeather).then(res => {

      const currentWeather = res.data;

      this.setState({
            city: currentWeather.name,
            country: country,
            currentDay: currentDay,
            iconWeather: `http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`,
            desc: currentWeather.weather[0].description,
            tempMax: `${Math.round(currentWeather.main.temp_max - 273.15)}`,
            tempMin: `${Math.round(currentWeather.main.temp_min - 273.15)}`
          })

    })
  }


  render() {
    return (

      <div className="mainContainer">
        <div className="form-n-weather">
          <Form getWeather={this.getWeather}/>
          <WeatherToday city={this.state.city}
              country={this.state.country}
              currentDay={this.state.currentDay}
               icon={this.state.iconWeather}
               desc={this.state.desc}
               tempMax={this.state.tempMax}
               tempMin={this.state.tempMin}
          />
          </div>
      </div>
    );
  }
}

export default App;
