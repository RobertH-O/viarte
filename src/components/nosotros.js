import React from 'react';
import Mision from '../images/mision-icono.svg';
import Vision from '../images/vision-icono.svg';
import Valores from '../images/valores-icono.svg';
import '../App.css'

 const Nosotros = () =>  (
  
      <div id="Nosotros"> 
          <container className="flex">
              <div className="cols-3">
                  <div className="ficha">
                    <div className="ficha-top flex center">
                        <div className="ficha-ico center">
                            <img src={Mision}  alt="Mision" />
                        </div>  
                        <h3 className="naranja">Misión</h3>
                    </div>
                    <div className="ficha-bot">   
                    <p>Ofrecer alternativas interesantes de publicidad exterior, bajo altos estándares de calidad, siempre dentro del marco legal a fin de sostener relaciones comerciales responsables y duraderas.</p>
                    </div> 
                  </div>
              </div>

              <div className="cols-3">
                  <div className="ficha">
                    <div className="ficha-top flex center">
                        <div className="ficha-ico center">
                            <img src={Vision}  alt="Vision" />
                        </div>  
                        <h3 className="naranja">Visión</h3>
                    </div>
                    <div className="ficha-bot">   
                    <p>Ser reconocidos como la auténtica generación de relevo en el negocio de publicidad exterior, comprometidos con la excelencia en sus productos y la calidad de todos los servicios prestados.</p>
                    </div> 
                  </div>
              </div>

              <div className="cols-3">
                  <div className="ficha">
                    <div className="ficha-top flex center">
                        <div className="ficha-ico center">
                            <img src={Valores}  alt="Valores" />
                        </div>  
                        <h3 className="naranja">Valores</h3>
                    </div>
                    <div className="ficha-bot">   
                        <ul> 
                            <li>Responsabilidad</li>
                            <li>Respuesta inmediata</li>
                            <li>Trato cercano con nuestros clientes</li>
                            <li>Adaptación a las necesidades del cliente</li>
                        </ul>
                    </div> 
                  </div>
              </div>
          </container>  
      </div>
   
 )
  
export default Nosotros
