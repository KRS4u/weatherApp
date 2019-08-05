import React from "react";
import WeatherList from "./weather-list";

const Weather = props => {
  if (props.city && props.country && props.weatherlist.length) {
    //  const forecast = [];

    //  props.weatherlist.forEach(weather => {
    //   forecast.push(<WeatherList />);
    // });
    return (
      <div>
        <div>
          <h4>
            {props.city}, {props.country}
          </h4>
        </div>
        <div className="card card-custom">
          {props.weatherlist.map(weather => (
            <div
              key={`${weather.dt}`}
              className="card bg-secondary text-white card-custom-margin"
            >
              <WeatherList
                time={weather.dt_txt}
                temp={weather.main.temp}
                temp_max={weather.main.temp_max}
                temp_min={weather.main.temp_min}
                humidity={weather.main.humidity}
                conditions={weather.weather[0].main}
                description={weather.weather[0].description}
                uid={weather.weather[0].id}
                iconid={weather.weather[0].icon}
              />
            </div>
          ))}
        </div>
      </div>
    );
  } else if (props.error) {
    window.alert(props.error);
    return <div />;
  }
  return <div />;
};
export default Weather;
