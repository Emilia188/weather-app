import React from "react";
import axios from "axios";
import "./Header.css";
export default function Header() {
  return (
    <div className="Header">
      <form className="searchForm">
        <div className="row pb-4">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              required
              autoFocus
              className="searchFormInput w-100"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="searchFormButton w-100"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
