import { useContext } from "react"
import { CardComponent } from "../components/CardComponent"
import { ProductContext } from "../context/ProductContext"
import { CartContext } from '../context/CartContext'

export const ProductsPage = () => {

  const { products } = useContext(ProductContext)
  // Obtener shoppingList para chequear el estado
  const { shoppingList, addProduct, removeProduct } = useContext(CartContext) 

  //Funcion auxiliar para verificar si un producto ya fue agregado
  const isProductInCart = (id) => {
    return shoppingList.some(p => p.id === id); 
  }

  return (
    <>
      <h1>Productos</h1>
      <hr />
      {products.map(product => (
        <CardComponent
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          //  Pasamos el estado de si el producto está agregado
          isAdded={isProductInCart(product.id)} 
          handlerAdd={() => addProduct(product)}
          handlerRemove={() => removeProduct(product.id)}
        />
      ))}
    </>
  )
}