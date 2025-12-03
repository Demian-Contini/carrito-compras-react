import { useEffect } from "react";
import { useState } from "react";
import Swal from 'sweetalert2'

export const ProductsPage = () => {
  
  
  const [products, setProducts] = useState([])
  
  const fetchProducts = async () => {
  
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
        
    } catch (error) {
        Swal.fire(
        {
            icon: 'error',
            title: 'Error!',
            text: 'Hubo un problema al cargar los productos'
        }
    )
    console.error(error)
    }

  }

  useEffect(() => {
    fetchProducts()
  }, [])
  
  return (
    <>
    <h1>Productos</h1>
    <hr />
    
    </>
  )
}
