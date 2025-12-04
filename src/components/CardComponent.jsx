import { useState } from "react";
import '../styles/CardComponent.css'

export const CardComponent = ({image, title, description, price }) => {
  
  const [added, setAdded] = useState(false) //Remove (true) y Add (false)
  
  const handleToggle = () => {
    setAdded(!added); 
}

return (
<div className="card">
  
  <img src={image} alt={title} className="card-img" />
  
 {/* 1. Contenedor de Contenido (Texto) - Ahora correcto */}
 <div className="card-content">
  <h3 className="card-title">{title}</h3>
<p className="card-description">{description}</p>
  </div>
  
  {/* 2. Contenedor ÚNICO de Acciones (Precio + Botón) */}
  <div className="card-actions"> 
  <p className="card-price">${price.toFixed(2)}</p>
 
{
added
? <button 
                  type="button" 
  className="remove-button"
    onClick={handleToggle}
   >
  Quitar del carrito
  </button>
:
   <button
 type="button" 
  className="add-button"
  onClick={handleToggle}
  >
  Agregar al carrito
  </button>
 }
  
  </div> {/* Cierra card-actions */}
  </div> /* Cierra card */
  )
}
