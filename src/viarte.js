import React from 'react'
import Menu from './components/menu'
import Inicio from './components/inicio'
import Nosotros from './components/nosotros'
import Productos from './components/productos'
import Contacto from './components/contacto'
import Footer from './components/footer';
import './viarte.css'

const Viarte = () => (  

    <div className="Viarte">
      <Menu/>    
      <Inicio/> 
      <Nosotros/>
      <Productos/>            
      <Contacto/>
      <Footer />   
    </div>

  )

export default Viarte;
