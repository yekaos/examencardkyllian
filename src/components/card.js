import React from "react";
import './card.css'
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from "gatsby"

const Card=({imagen, piefoto, titulo, descripcion, enlace})=>{
return(
  <>
  <div className="cardexamen">
    <figure>
      <GatsbyImage image={imagen} alt={piefoto} />
    </figure>
    <h2>{titulo}</h2>
    <p>{descripcion}</p>
    <Link to= {enlace} className="link"><button className="botonexamen">+ Info</button></Link>
  </div>
  </>
)
}
export default Card