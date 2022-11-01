import "./App.css";
//import data from "../public/assets/data.json";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header className="header-container" />
      </header>
      <Section />
    </div>
  );
}

export default App;
