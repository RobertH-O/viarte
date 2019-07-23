import React from 'react';
import '../viarte.css'

 const Contacto = () =>  (
  
<div id="Contacto"> 
  <container>
    <div className="con-inf">
      <h1>Contacto</h1>

      <div className="mail-tlf">
        <i class="fas fa-envelope-open"></i>
        <p>directotr@viarte.net</p>
      </div>

      <div className="mail-tlf">
        <i class="fas fa-phone"></i>
        <p>0212.414.65.99 - 0412.242.66.72</p>
        </div>
    </div>

    <div className="con-form">
      <form>
        <input type="text" placeholder="Nombre" name="Nombre" />
        <input type="email" placeholder="Correo" name="Correo" />
        <input type="tel" placeholder="Teléfono" name="Teléfono" />
        <textarea placeholder="Mensaje"></textarea>
        <input type="submit" value="Enviar" />
      </form>
    </div>
            
  </container>  

  <div className="ciudad-blanca"></div>
</div>
   
 )
  
export default Contacto
