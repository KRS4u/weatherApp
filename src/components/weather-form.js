import React from "react";

const WeatherForm = props => (
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
    <form onSubmit={props.getWeather} className="form-inline form-center2">
      <input type="text" name="city" placeholder="Enter city" />
      <input type="text" name="country" placeholder="Enter Country" />
      <button className="btn btn-primary">Get Weather</button>
    </form>
  </nav>
);
export default WeatherForm;
