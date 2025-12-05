import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import "../styles/CartPage.css";

export const CartPage = () => {
  const { shoppingList, removeProduct, incrementQuantity, decrementQuantity } = useContext(CartContext);

  const calculateTotal = () =>
    shoppingList.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);

  const handlerPurchase = () => {
    const productsPurchased = shoppingList.map(p => `${p.title} x ${p.quantity}`).join("\n");
    Swal.fire({
      icon: "success",
      title: "Compra realizada con éxito",
      html: `<p>Has comprado:</p><pre>${productsPurchased}</pre>`
    });
  };

  return (
    <div className="cart-page">
      {shoppingList.length === 0 && <p className="empty-cart">El carrito está vacío</p>}

      <div className="cart-items">
        {shoppingList.map(product => (
          <div key={product.id} className="cart-item">
            <img src={product.img} alt={product.title} className="cart-item-img" />

            <div className="cart-item-details">
              <h3 className="cart-item-title">{product.title}</h3>
              <p className="cart-item-description">{product.description}</p>
            </div>

            <div className="cart-item-actions">
              <p className="cart-item-price">${product.price.toFixed(2)}</p>
              <div className="quantity-controls">
                <button className="decrement" onClick={() => decrementQuantity(product.id)}>-</button>
                <span>{product.quantity}</span>
                <button className="increment"  onClick={() => incrementQuantity(product.id)}>+</button>
              </div>
              <button className="remove-button" onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>

      {shoppingList.length > 0 && (
        <div className="cart-total-section">
          <p className="cart-total">Total: ${calculateTotal()}</p>
          <button className="buy-button" onClick={handlerPurchase}>Comprar</button>
        </div>
      )}
    </div>
  );
};
