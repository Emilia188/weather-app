import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      This project was coded by{" "}
      <a href="https://github.com/Emilia188" target="_blank" rel="noreferrer">
        Emilia Adasiewicz
      </a>{" "}
      and is{" "}
      <a
        href="https://github.com/Emilia188/weather-app"
        target="_blank"
        rel="noreferrer"
      >
        open-sourced on GitHub
      </a>{" "}
      and{" "}
      <a
        href="https://weather-app-blue-sigma-68.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >
        hosted on Vercel
      </a>
    </div>
  );
}
