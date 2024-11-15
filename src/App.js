import SearchEngine from "./SearchEngine";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchEngine defaultCity="Berlin" />
        <Footer />
      </div>
    </div>
  );
}
