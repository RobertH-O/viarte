import React from 'react';
import logopie from '../images/viarte-logo.svg';
import '../viarte.css'

const Footer = () => (

<footer>
  <container>
    <div className="logo-pie">
      <a href="#Inicio"><img src={logopie}  alt="logopie" /></a>
    </div>
    
    <ul className="menu-pie center">
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
  