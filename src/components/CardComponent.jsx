import { useContext, useMemo } from "react"; //useContext y useMemo
import '../styles/CardComponent.css'
import { CartContext } from "../context/CartContext"

export const CardComponent = ({ id, image, title, description, price, handlerAdd, handlerRemove }) => {

    // Usamos el Contexto como fuente de verdad
    const { shoppingList } = useContext(CartContext)

    // useMemo se recalcula solo cuando 'shoppingList' o 'id' cambian.
    const added = useMemo(() => {
        // Comprueba si el producto está en la lista de compras global
        return shoppingList.some(product => product.id === id);
    }, [shoppingList, id]); // Depende de la lista y el ID del producto
   
    // El estado 'added' se maneja automáticamente por useMemo y CartContext.
    const addProduct = () => {
        handlerAdd()
    }
    const removeProduct = () => {
        handlerRemove()
    }
    
    return (
        <div className="card">
    
            <img
                src={image || "https://via.placeholder.com/120"}
                alt={title}
                className="card-img"
            />
    
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                <p className="card-price">${price}</p>
    
                {
                    // 'added' refleja el estado GLOBAL
                    added
                        ? <button
                            type="button"
                            className="remove-button"
                            onClick={removeProduct} // Llama a la función del contexto
                        >
                            Quitar del Carrito
                        </button>
                        : <button
                            type="button"
                            className="add-button"
                            onClick={addProduct} // Llama a la función del contexto
                        >
                            Agregar al Carrito
                        </button>
                }
    
            </div>
    
        </div>
    )}
    