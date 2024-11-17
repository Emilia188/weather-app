import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day mb-1">Mon</div>
          <WeatherIcon code="rain-day" size={42} />
          <div className="WeatherForecast-temperatures mt-1 mb-4">
            <span className="WeatherForecast-temperature-max">20°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
