import React from 'react';
import Mision from '../images/mision-icono.svg';
import Vision from '../images/vision-icono.svg';
import Valores from '../images/valores-icono.svg';
import '../viarte.css'

 const Nosotros = () =>  (
  
<div id="Nosotros"> 
    <container>
        <div className="ficha">
            <div className="ficha-cabecera center">
                <div className="ficha-icono center">
                    <img src={Mision}  alt="Mision" />
                </div>  
                <h3>Misión</h3>
            </div>
            <div className="ficha-contenido">   
                <p>Ofrecer alternativas interesantes de publicidad exterior, bajo altos estándares de calidad, siempre dentro del marco legal a fin de sostener relaciones comerciales responsables y duraderas.</p>
            </div> 
        </div>

        <div className="ficha">
            <div className="ficha-cabecera center">
                <div className="ficha-icono center">
                    <img src={Vision}  alt="Vision" />
                </div>  
                <h3>Visión</h3>
            </div>
            <div className="ficha-contenido">   
                <p>Ser reconocidos como la auténtica generación de relevo en el negocio de publicidad exterior, comprometidos con la excelencia en sus productos y la calidad de todos los servicios prestados.</p>
            </div> 
        </div>

        <div className="ficha">
            <div className="ficha-cabecera center">
                <div className="ficha-icono center">
                    <img src={Valores}  alt="Valores" />
                </div>  
                <h3>Valores</h3>
            </div>
            <div className="ficha-contenido">   
                <ul> 
                    <li>Responsabilidad</li>
                    <li>Respuesta inmediata</li>
                    <li>Trato cercano con nuestros clientes</li>
                    <li>Adaptación a las necesidades del cliente</li>
                </ul>
            </div> 
        </div>
    </container>  
</div>
   
 )
  
export default Nosotros
