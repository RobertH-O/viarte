import React from 'react';
import logoValla from '../images/viarte-logo-valla.svg';
import '../viarte.css'

 const Inicio = () =>  (
  
<main id="Inicio"> 
  <container>
    <div className="ini-logo">
      <img src={logoValla} alt="logo" />
    </div>

    <div className="ini-inf center">
      <p><span className="Changaone">Somos</span> una compañía de publicidad exterior especializada en vallas publicitarias de diversos formatos y con estructuras personalizadas </p>
    </div>
            
  </container>  

  <div className="ciudad-gris"></div>
</main>
   
 )
  
export default Inicio 
