import React from "react";
import axios from "axios";
import "./Header.css";
export default function Header() {
  return (
    <form className="searchForm">
      <input
        type="search"
        placeholder="Enter a city..."
        required
        className="searchFormInput"
      />
      <input type="submit" value="Search" className="searchFormButton" />
    </form>
  );
}
