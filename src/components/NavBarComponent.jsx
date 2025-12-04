import { Badge } from "@mui/material";
import { ShoppingCart, Search, LightMode, DarkMode } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/NavBarComponents.css";
import MenuHambIcon from "../assets/Menu-hamb.png";
import SearchIcon from "../assets/search.png";


export const NavBarComponent = () => {
    const { shoppingList } = useContext(CartContext);

    const totalItems = shoppingList.reduce(
        (total, item) => total + item.quantity,
        0
    );

    // Modo oscuro
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("dark-mode");
    };

    return (
        <nav className="navbar navbar-expand-lg fondo">
            <div className="container-fluid">

                {/* Marca */}
                <NavLink to="/" className="navbar-brand">
                    DTC
                </NavLink>

                {/* Sección derecha (carrito + menú hamburguesa) */}
                <div className="d-flex order-lg-2 align-items-center gap-3">

                    {/* Dark mode */}
                    <button className="btn btn-sm btn-light toggle-mode-btn" onClick={toggleDarkMode}>
                        {darkMode ? <LightMode /> : <DarkMode />}
                    </button>

                    {/* Carrito */}
                    <NavLink to="/carrito" className="nav-link carrito">
                        <Badge badgeContent={totalItems} color="error">
                            <ShoppingCart />
                        </Badge>
                    </NavLink>

                    {/* Botón hamburguesa */}
                    <button 
                        className="navbar-toggler custom-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <img src={MenuHambIcon} alt="Menu" className="menu-icono" />
                    </button>
                </div>

                {/* Sección expandible */}
                <div className="collapse navbar-collapse order-lg-1" id="navbarNav">

                    {/* Input de búsqueda con lupita */}
                    <form className="search-container d-flex ms-lg-4 mt-3 mt-lg-0">
                        <div className="search-wrapper">
                        <img src={SearchIcon} alt="Buscar" className="search-icon" />

                            <input 
                                type="text" 
                                placeholder="Buscar productos..." 
                                className="search-input"
                            />
                        </div>
                    </form>

                    {/* Imagen extra
                    <img 
                        src={ExtraImage} 
                        alt="Extra" 
                        className="extra-img ms-lg-4 mt-3 mt-lg-0"
                    /> */}

                    <div className="navbar-nav ms-lg-4">
                        <NavLink to="/" className="nav-link">
                            Productos
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};
