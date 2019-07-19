import React from 'react';
import logoValla from '../images/logo-valla.svg';
import '../App.css'

 const Somos = () =>  (
  
      <main className="somos"> 
          <div className="container flex">
            <div className="somos-col-1 borderbox valla">
               <img src={logoValla} className="" alt="logo" />
            </div>

            <div className="somos-col-2 borderbox center">
                <p className="inf"><span className="Changaone">Somos</span> una compañía de publicidad exterior especializada en vallas publicitarias de diversos formatos y con estructuras personalizadas </p>
            </div>
            
          </div>  

          <div className="ciu-gris"></div>
      </main>
   
 )
  
export default Somos 
