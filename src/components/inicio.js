import React from 'react';
import logoValla from '../images/viarte-logo-valla.svg';
import '../App.css'

 const Inicio = () =>  (
  
      <main id="Inicio"> 
          <container className="flex">
            <div className="col-1">
               <img src={logoValla} className="logo" alt="logo" />
            </div>

            <div className="col-2 center">
                <p className="info"><span className="Changaone">Somos</span> una compañía de publicidad exterior especializada en vallas publicitarias de diversos formatos y con estructuras personalizadas </p>
            </div>
            
          </container>  

          <div className="ciudad-gris"></div>
      </main>
   
 )
  
export default Inicio 
