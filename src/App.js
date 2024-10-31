import logo from "./logo.svg";
import Header from "./Header";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <WeatherInfo />
      <WeatherForecast />
      <Footer />
    </div>
  );
}

export default App;
