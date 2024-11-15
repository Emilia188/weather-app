import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row pt-2">
        <div className="col-7 pb-4">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              {" "}
              <FormattedDate date={props.data.date} />, {props.data.description}
            </li>
            <li>
              Humidity: <strong>{props.data.humidity}%</strong>, Wind:{" "}
              <strong>{props.data.wind} km/h</strong>
            </li>
            <li>Feels like: {Math.round(props.data.feelsLike)}°C</li>
          </ul>
        </div>
        <div className="col-5 d-flex justify-content-end">
          <div className="clearfix">
            <WeatherIcon code={props.data.icon} size={64} />
            <Temperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}
