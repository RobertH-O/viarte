import React from 'react';
import logo from '../images/logo.svg'
import '../App.css'

 const Header = (props) =>  (
  
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />  
          <p>Hello, {props.name}</p>        
        </header>
      </div>
   
 )
  
export default Header  
