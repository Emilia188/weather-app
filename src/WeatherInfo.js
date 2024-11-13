import React from "react";
import FormattedDate from "./FormattedDate";
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
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="icon float-left mb-4"
            ></img>
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
