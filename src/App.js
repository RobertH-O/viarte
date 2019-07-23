import React from 'react'
import Menu from './components/menu'
import Inicio from './components/inicio'
import Nosotros from './components/nosotros'
import Productos from './components/productos'
import Contacto from './components/contacto'
import Footer from './components/footer';
import './App.css'


const App = () => (  

    <div className="App">
      <Menu/>    
      <Inicio/> 
      <Nosotros/>
      <Productos/>            
      <Contacto/>
      <Footer />   
    </div>

  )

export default App;
