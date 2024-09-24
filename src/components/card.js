import React from "react"
import './card.css'
const Cards = ({
  imagen, 
  boton = '+ info', 
  titulo,
  descripcion,
  enlace
})=>{
    return(
        <>
        <div className="cardexamen">
            <h2>{titulo}</h2>
            {imagen}
            <p>{descripcion}</p>
            <a href={enlace} target="_blank">
            <button className="botonexamen">{boton}</button>
            </a>
        </div>
        </>
    )
}
export default Cards