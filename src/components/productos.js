import React from 'react';
import logo from '../images/viarte-logo.svg';
import '../App.css'

 const Productos = () =>  (
  
  <div id="Productos"> 
    <h1 className="naranja">Productos y servicios</h1>  
    <container className="flex">
      <div className="cols-2">
          <div className="pro-ser flex">
            <div className="pro-ser-img"></div>
            <div className="pro-ser-txt">
              <h3 className="gris">Vallas publicitarias</h3>
              <p>Arrendamiento de espacios publicitarios en las principales autopistas del país en la Región Capital y Central del país.</p>
            </div>
          </div>

          <div className="pro-ser flex">
            <div className="pro-ser-img"></div>
            <div className="pro-ser-txt">
              <h3 className="gris">Gigantografìas</h3>
              <p>Ideales para identificar su negocio o para destacar información que necesite. Disponibles en neón, led, fotovallas y panaflex.</p>
            </div>
          </div>

          <div className="pro-ser flex">
            <div className="pro-ser-img">
            <img src={logo} alt="logo" />
            </div>
            <div className="pro-ser-txt">
              <h3 className="gris">Avisos luminosos</h3>
              <p>Pósters o carteles impresos a gran tamaño. Incluye rotulaciones, impresiones e instalaciones de material para publicitar.</p>
            </div>
          </div>

          <div className="pro-ser flex">
            <div className="pro-ser-img"></div>
            <div className="pro-ser-txt">
              <h3 className="gris">Fachadas publicitarias</h3>
              <p>Piezas de diseño lo suficientemente grandes como para cubrir la parte lateral de un edificio.Es un tipo de publicidad bastante poderoso por la gran visibilidad que tiene.</p>
            </div>
          </div>

          <div className="pro-ser flex">
            <div className="pro-ser-img"></div>
            <div className="pro-ser-txt">
              <h3 className="gris">Estructuras personalizadas</h3>
              <p>Piezas de metal con tamaños según la solicitud del cliente. Son excelentes para avisos con relieve o para sostener material de publicidad de dimensiones particulares.</p>
            </div>
          </div>

          <div className="pro-ser flex">
            <div className="pro-ser-img"></div>
            <div className="pro-ser-txt">
              <h3 className="gris">Tótems publicitarios</h3>
              <p>Estructuras verticales para comunicar la marca de una empresa en las paradas de autobuses o en sitios donde naturalmente concurren muchas personas.</p>
            </div>
          </div>
        </div>

        <div className="cols-2">

          <div className="pro-ser flex">
            <div className="pro-ser-img"></div>
            <div className="pro-ser-txt">
              <h3 className="gris">Adosamientos publicitarios</h3>
              <p>Arrendamiento de espacios publicitarios ene las principales autopistas del país en la Región Capital y Central del país.</p>
            </div>
          </div>

          <div className="pro-ser flex">
            <div className="pro-ser-img"></div>
            <div className="pro-ser-txt">
              <h3 className="gris">Andamios publicitarios</h3>
              <p>Estructuras metálicas utilizadas como sostén de grandes formatos, ideal si piensa utilizar lona publicitaria en caso que lo amerite.</p>
            </div>
          </div>

          <div className="pro-ser flex">
            <div className="pro-ser-img"></div>
            <div className="pro-ser-txt">
              <h3 className="gris">Cajas de luces</h3>
              <p>Ideal para avisos pequeños en locales nocturnos o para mejorar las señalizaciones internas de un espacio compartido.</p>
            </div>
          </div>

          <div className="pro-ser flex">
            <div className="pro-ser-img"></div>
            <div className="pro-ser-txt">
              <h3 className="gris">Impresiones digitales</h3>
              <p>Son muy convenientes cuando se desea personalizar el contenido, hay poco tiempo o la cantidad de impresión es moderada a baja.</p>
            </div>
          </div>

          <div className="pro-ser flex">
            <div className="pro-ser-img"></div>
            <div className="pro-ser-txt">
              <h3 className="gris">Banderines</h3>
              <p>Consiste en piezas estratégicamente colocadas en los postes de luz de las principales vías de comunicación del país.</p>
            </div>
          </div>

        </div>
    </container>  
  </div>
   
 )
  
export default Productos 
