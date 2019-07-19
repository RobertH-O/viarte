import React from 'react'
import Header from './components/header'
import Somos from './components/somos'
import Nosotros from './components/nosotros'
import Footer from './components/footer';
import './App.css'

const App = () => (  

    <div className="App">
      <Header/>    
      <Somos/> 
      <Nosotros/>            
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
