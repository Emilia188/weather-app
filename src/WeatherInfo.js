import React from "react";
import "./WeatherInfo.css";

export default function WeatherInfo() {
  return (
    <div className="row">
      <div className="col-8">
        <h1>Berlin</h1>
        <ul>
          <li>Thursday 11:49</li>
          <li>Overcast Clouds</li>
          <li>
            Humidity: <strong>79%</strong>, Wind: <strong>6 km/h</strong>
          </li>
        </ul>
      </div>
      <div className="col-4">⛅ 6°C</div>
    </div>
  );
}
