import React from "react";
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
      <input type="submit" value="Search" class="searchFormButton" />
    </form>
  );
}
