import React from 'react';
import Dumpism from './components/Dumpism'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Tronald Dump</h2>
        <h4
          style={{
          width: "75%",
          margin: "0 auto",
          paddingTop: "25px",
          paddingBottom: "25px",
          color: "white"
          }}
        >
          Random generator of the "best" quotes from the 45th President of the United States</h4>
      </header>

      <Dumpism />

      <h5
        style={{
          fontSize: "8px",
          width: "200px",
          margin: "0 auto",
          paddingTop: "25px",
          paddingBottom: "25px",
          color: "white"
        }}
      >
        *Disclaimer: The views and opinions expressed in these quotes are those
        of the author and do not necessarily reflect this website. Quotes are
        not vetted or fact checked and are displayed at random.{" "}
      </h5>
    </div>
  );
}

export default App;
