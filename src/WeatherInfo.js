import React from "react";
import "./WeatherInfo.css";

export default function WeatherInfo() {
  return (
    <div className="WeatherInfo">
      <div className="row pt-2">
        <div className="col-8 pb-4">
          <h1>Berlin</h1>
          <ul>
            <li>Thursday 11:49, overcast clouds</li>
            <li>
              Humidity: <strong>79%</strong>, Wind: <strong>6 km/h</strong>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <div className="clearfix">
            <img
              src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
              alt="icon"
              className="icon mb-4 float-left"
            ></img>
            <span className="temperature">6</span>
            <span className="unit">°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
