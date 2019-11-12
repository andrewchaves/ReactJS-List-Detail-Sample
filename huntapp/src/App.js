import React from 'react'
import Routes from './Routes'

import Header from './Components/Header/Header'

import "./styles.css"

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Routes/>
    </div>
  );
}

export default App;
