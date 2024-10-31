import React from "react";
import "./WeatherInfo.css";

export default function WeatherInfo() {
  return (
    <div class="weatherAppData">
      <div>
        <h1 className="weatherAppCity">Belin</h1>
        <p className="weatherAppDetails">
          <span id="time">Thursday 11:49</span>,
          <span id="discription"> overcast clouds</span>
          <br />
          Humidity: <strong id="humidity">79%</strong>, Wind:
          <strong id="wind-speed"> 6.26km/h</strong>
        </p>
      </div>
      <div className="weatherAppTemperatureContainer">
        <div className="weatherAppIcon">⛅</div>
        <div className="weatherAppTemperature">13</div>
        <div className="weatherAppUnit">°C</div>
      </div>
    </div>
  );
}
