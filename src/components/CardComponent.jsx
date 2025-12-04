import { useState } from "react";
import '../styles/CardComponent.css'

export const CardComponent = ({image, title, description, price }) => {
  
  const [added, setAdded] = useState(false) //Remove (true) y Add (false)
  
  const handleToggle = () => {
    setAdded(!added); 
}
  return (
    <div className="card">

      <img src={image} alt={title} className = "card-img" />

    <div className ="card-content">

      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <p className="card-price">${price}</p>



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

    
    </div>
    </div>
  )
}
