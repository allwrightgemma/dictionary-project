import "./App.css";

import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="dictionary" />
        </main>

        <footer className="App-footer">
          <a href="https://github.com/allwrightgemma/dictionary-project">
            Coded by Gemma Allwright
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
