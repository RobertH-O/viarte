import React from 'react';
import logo from '../images/viarte-logo.svg';
import '../App.css'

const Footer = () => (

      <footer>
        <container className="flex">
          <img src={logo} className="logo" alt="logo" />
          <ul className="menu-pie flex center">
              <li> 
                <a href="#Inicio">
                  Inicio
                </a>
              </li>

              <li> 
                <a href="#Nosotros">
                  Nosotros
                </a>
              </li>

              <li> 
                <a href="#Productos">
                  Productos y servicios
                </a>
              </li>

              <li> 
                <a href="#Contacto">
                  Contacto
                </a>
              </li>
          </ul>  
        </container>  
      </footer>

    )
  
export default Footer
  