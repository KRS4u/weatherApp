import React from "react";
import Title from "./components/title";
import WeatherForm from "./components/weather-form";
import Weather from "./components/weather";

const API_KEY = "9a500cb01eeb0f69f8033aab260f31d9";

class App extends React.Component {
  state = {
    city: undefined,
    country: undefined,
    weatherlist: [],
    error: undefined
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        city: data.city.name,
        country: data.city.country,
        weatherlist: data.list,
        error: ""
      });
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        weatherlist: [],
        error: "Please Enter Valid City and Country"
      });
    }
  };
  render() {
    return (
      <div className="App">
        <div>
          <Title />
        </div>
        <WeatherForm getWeather={this.getWeather} />
        <Weather
          city={this.state.city}
          country={this.state.country}
          weatherlist={this.state.weatherlist}
          error={this.state.error}
        />
      </div>
    );
  }
}
export default App;
