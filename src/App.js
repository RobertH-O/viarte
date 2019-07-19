import React from 'react'
import Header from './components/header'
import Footer from './components/footer';
import './App.css'

const App = () => (  

    <div className="App">
      <Header name="Novanet"/>                  
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <p>Hola Roberto</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <Footer />      
    </div>

  )

export default App;
