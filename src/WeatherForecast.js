import React from "react";
import "./WeatherForecast.css";
export default function WeatherForecast() {
  return (
    <div className="weatherForecast">
      <div className="weatherForecast-Day">
        <div className="weatherForecastDate">Thu</div>
        <img
          src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
          className="weatherForecastIcon"
        ></img>
        <div className="weatherForecastTemperatures">
          <div className="weatherForecastTemperature">
            <strong>14º</strong>
          </div>
          <div className="weatherForecastTemperature">5º</div>
        </div>
      </div>
      <div className="weatherForecast-Day">
        <div className="weatherForecastDate">Fri</div>
        <img
          src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
          className="weatherForecastIcon"
        ></img>
        <div className="weatherForecastTemperatures">
          <div className="weatherForecastTemperature">
            <strong>14º</strong>
          </div>
          <div className="weatherForecastTemperature">5º</div>
        </div>
      </div>
      <div className="weatherForecast-Day">
        <div className="weatherForecastDate">Sat</div>
        <img
          src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
          className="weatherForecastIcon"
        ></img>
        <div className="weatherForecastTemperatures">
          <div className="weatherForecastTemperature">
            <strong>14º</strong>
          </div>
          <div className="weatherForecastTemperature">5º</div>
        </div>
      </div>
      <div className="weatherForecast-Day">
        <div className="weatherForecastDate">Sun</div>
        <img
          src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
          className="weatherForecastIcon"
        ></img>
        <div className="weatherForecastTemperatures">
          <div className="weatherForecastTemperature">
            <strong>14º</strong>
          </div>
          <div className="weatherForecastTemperature">5º</div>
        </div>
      </div>
      <div className="weatherForecast-Day">
        <div className="weatherForecastDate">Mon</div>
        <img
          src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
          className="weatherForecastIcon"
        ></img>
        <div className="weatherForecastTemperatures">
          <div className="weatherForecastTemperature">
            <strong>14º</strong>
          </div>
          <div className="weatherForecastTemperature">5º</div>
        </div>
      </div>
    </div>
  );
}
