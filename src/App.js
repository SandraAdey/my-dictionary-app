import React from "react";
import Dicionary from "./components/Dicionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">
          <h1 className="heading">Dictionary</h1>
        </header>
        <main>
          <Dicionary defaultKeyword="Japan" />
        </main>
        <footer className="mt-5 footer text-center">
          <p className="m-0 credit">
            Coded by{" "}
            <a
              href="https://github.com/sandraadey"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sandra Adeyinka
            </a>
            ,{" "}
            <a
              href="https://github.com/sandraadey/my-dictionary-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open sourced on Github
            </a>
            . Hosted on Vercel
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
