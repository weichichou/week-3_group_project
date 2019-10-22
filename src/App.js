import React from 'react';
import './App.css';
import Summary from './component/Summary'

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
          <Summary imagecontent="https://m.media-amazon.com/images/M/MV5BMjQ2ODIyMjY4MF5BMl5BanBnXkFtZTgwNzY4ODI2NzM@._V1_.jpg" title="Aladdin" desc="A kind-hearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true." director="Guy Ritchie" stars="Will Smith, Mena Massoud, Naomi Scott" />
          <Summary imagecontent="https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_UX182_CR0,0,182,268_AL_.jpg" title="The Lion King" desc="After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery." director="Roger Allers, Rob Minkoff" stars="Matthew Broderick, Jeremy Irons, James Earl Jones" />
          <Summary imagecontent="https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg" title="Toy Story" desc="A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room." director="John Lasseter" stars=" Tom Hanks, Tim Allen, Don Rickles" />
          
        </div>
        
      </main>

      <footer>
<h6>Made with ♥ at Codaisseur</h6>

      </footer>
    </div>
  );
}

export default App;
