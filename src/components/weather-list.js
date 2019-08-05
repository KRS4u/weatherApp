import React from "react";

const WeatherList = props => {
  const d = new Date(props.time);

  return (
    <div className="card-body">
      <div className="temp-div">
        <h2>
          {props.temp} &#8451;
          <br />
        </h2>
        <p className="timefont">{d.toLocaleTimeString()}</p>
        <p className="detailsFont">{d.toDateString()}</p>
      </div>
      <div className="details-div detailsFont">
        Max. Temp : {props.temp_max} &#8451;
        <br />
        Min. Temp : {props.temp_min} &#8451;
        <br />
        Humidity : {props.humidity}% <br />
        Weather : {`${props.conditions}, ${props.description}`}
      </div>
      <div className="icon-div">
        <img
          className="icon-margin"
          src={`http://openweathermap.org/img/wn/${props.iconid}@2x.png`}
          alt="icon"
        />
      </div>
    </div>
  );
};
export default WeatherList;
