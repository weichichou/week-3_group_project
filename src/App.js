import React from 'react';
import './App.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import Api from './component/Api'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route } from "react-router-dom";
import DetailPage from "./component/DetailPage"

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/*  <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
          Movie Review Feed
        </h1>
        
      </header>
      
      <main>
        <div className="moviefull">


          <div className="summary"></div>
          <Route exact path="/" component={Api} test="hi" />
          <Route path="/detailPage/:title" component={DetailPage} />
          
        </div>
        
      </main>

      <footer>
          <h6>Made with ♥ at Codaisseur</h6>

      </footer>
    </div>
  );
}

export default App;
