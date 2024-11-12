import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";
import axios from "axios";

export default function WeatherInfo(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      iconUrl:
        "https://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
      city: response.data.city,
      feelsLike: response.data.temperature.feels_like,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="WeatherInfo">
        <div className="row pt-2">
          <div className="col-7 pb-4">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>
                {" "}
                <FormattedDate date={weatherData.date} />,{" "}
                {weatherData.description}
              </li>
              <li>
                Humidity: <strong>{weatherData.humidity}%</strong>, Wind:{" "}
                <strong>{weatherData.wind} km/h</strong>
              </li>
              <li>Feels like: {Math.round(weatherData.feelsLike)}°C</li>
            </ul>
          </div>
          <div className="col-5 d-flex justify-content-end">
            <div className="clearfix">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="icon float-left mb-4"
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
