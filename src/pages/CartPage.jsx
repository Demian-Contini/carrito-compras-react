import { useContext } from "react"
import { CartContext } from '../context/CartContext'
import Swal from "sweetalert2"

export const CartPage = () => {

  const { shoppingList, removeProduct, incrementQuantity, decrementQuantity } = useContext(CartContext)

  const calculateTotal = () => {
    // Suma de (precio * cantidad) y formato
    return shoppingList.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)
  }

  const handlerPurchase = () => {
    const productsPurchased = shoppingList.map(product => `${product.title} x ${product.quantity}`).join('\n')
    Swal.fire({
      icon: 'success',
      title: 'La compra se ha realizado con éxito',
      html: `<p> Has comprado: </p> <pre>${productsPurchased}</pre>`
    })
  }


  return (
    <>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>


          {shoppingList.map(product => (

            <tr key={product.id}>
              <th scope="row">{product.title}</th>
              {/* Formato de dos decimales al precio unitario */}
              <td>${product.price.toFixed(2)}</td> 
              <td>
               
                <div className="d-flex align-items-center"> {/* d-flex (Flexbox) para alinear los botones en línea */} 
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => decrementQuantity(product.id)}
                  >-</button>
                  <span className="mx-2">{product.quantity}</span> {/* Muestra la cantidad */}
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => incrementQuantity(product.id)}
                  >+</button>
                </div>
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeProduct(product.id)}
                >Eliminar</button>
              </td>
            </tr>

          ))}
          {/* Fila del total */}
          <tr>
            <th><b>TOTAL: </b></th>
            <td></td>
            <td></td>
            {/* Ubicar el total en la última columna */}
            <td><b>${calculateTotal()}</b></td>
          </tr>


        </tbody>
      </table>

      <div className="d-grid gap-2">
        <button
          className="btn btn-primary"
          type="button"
          onClick={handlerPurchase}
          // Deshabilitar el botón si el carrito está vacío
          disabled={shoppingList.length === 0} 
        >Comprar</button>

      </div>

    </>
  )
}