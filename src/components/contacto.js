import React from 'react';
import '../App.css'

 const Contacto = () =>  (
  
      <div id="Contacto"> 
          <container className="flex">
            <div className="cols-2">

              <div className="con-inf">
                <h1 className="naranja">Contacto</h1>

                  <div className="mail-tlf">
                    <p>directotr@viarte.net</p>
                  </div>

                  <div className="mail-tlf">
                    <p>0212.414.65.99 - 0412.242.66.72</p>
                  </div>
              </div>

            </div>

            <div className="cols-2">
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
