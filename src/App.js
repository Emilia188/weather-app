import logo from "./logo.svg";
import Header from "./Header";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <WeatherInfo defaultCity="Berlin" />
        <WeatherForecast />
        <Footer />
      </div>
    </div>
  );
}
