import "./App.css";
import data from "./assets/data/data.json";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <div className="container">
      <div>
        <Header />
      </div>
      <div>
        {data.map((element) => {
          return (
            <Section category={element.category} tabImages={element.images} /> //on mets en props 1 catégorie et un tableau d'images dans la section
          );
        })}
      </div>
    </div>
  );
}

export default App;

/*******************************************************

RESULTAT SUR NETLIFY:
  https://dreamy-halva-53ac95.netlify.app/

*******************************************************/
