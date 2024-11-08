import React from "react";
import axios from "axios";
import "./Header.css";
export default function Header() {
  return (
    <div className="Header">
      <form className="searchForm">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              required
              className="searchFormInput"
            />
          </div>
          <div className="col-3 p-0">
            <input type="submit" value="Search" className="searchFormButton" />
          </div>
        </div>
      </form>
    </div>
  );
}
