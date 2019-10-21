import React from 'react';
import './App.css';
import Review from './component/review';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/*  <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
          Fresh Tomatoes
        </h1>
      </header>

      <main>
        <div className="moviefull">
          <div className="summary"></div>
          <Review/>
        </div>
        
      </main>

      <footer>
          <h6>Made with ♥ at Codaisseur</h6>

      </footer>
    </div>
  );
}

export default App;
