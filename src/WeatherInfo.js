import React, { useState } from "react";
import "./WeatherInfo.css";
import axios from "axios";

export default function WeatherInfo(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: "Thursday 11:49",
      description: response.data.condition.description,
      iconUrl:
        "https://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="WeatherInfo">
        <div className="row pt-2">
          <div className="col-6 pb-4">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>
                {weatherData.date}, {weatherData.description}
              </li>
              <li>
                Humidity: <strong>{weatherData.humidity}%</strong>, Wind:{" "}
                <strong>{weatherData.wind} km/h</strong>
              </li>
            </ul>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <div className="clearfix">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="icon mb-4 float-left"
              ></img>
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "a93d1e9t3900f64c3459obcda72aab15";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading..";
  }
}
