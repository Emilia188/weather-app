import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header defaultCity="Berlin" />
        <Footer />
      </div>
    </div>
  );
}
