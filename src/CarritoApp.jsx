import { Navigate, Route, Routes } from "react-router-dom";import { NavBarComponent } from "./components/NavBarComponent";
import { ProductsPage } from "./pages/ProductsPage";
import { CartPage } from "./pages/CartPage";
import { ProductProvider } from "./context/ProductProvider";

export const CarritoApp = () => {
  return (
    <ProductProvider>
    <NavBarComponent/>
    <div className ='container'>
      <Routes>
          <Route path='/' element ={<ProductsPage></ProductsPage>}></Route>
          <Route path='/carrito' element ={<CartPage to='/'/>}></Route>
          <Route path='/*' element ={<Navigate to='/'/>}></Route>
      </Routes>
    </div>
    </ProductProvider>
  )
}
