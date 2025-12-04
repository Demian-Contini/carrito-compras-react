import { Badge } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"


export const NavBarComponent = () => {

    const { shoppingList } = useContext(CartContext)
    
    // Calcula el total de ítems sumando la 'quantity' de cada producto
    const totalItems = shoppingList.reduce(
        (accumulator, currentItem) => accumulator + currentItem.quantity, 
        0
    );

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to='/' className="navbar-brand">DTC</NavLink>
                
                {/* Carrito y toggler en una misma seccion para la version movil */}
                <div className="d-flex order-lg-2"> 
                    
                    {/* Ícono del Carrito de Compra (Siempre visible) */}
                    <NavLink to='/carrito' className='nav-link p-2'>
                        <Badge badgeContent={totalItems} color="primary"> {/* Usamos el conteo corregido */}
                            <ShoppingCart />
                        </Badge>
                    </NavLink>

                    {/* Botón Hamburguesa (Toggler) */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div> 

                <div className="collapse navbar-collapse order-lg-1" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                      
                        <NavLink to='/' className="nav-link" aria-current="page">Productos</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}