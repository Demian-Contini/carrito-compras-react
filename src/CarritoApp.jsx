import { Navigate, Route, Routes } from "react-router-dom";import { NavBarComponent } from "./component/NavBarComponent";
import { ProductsPage } from "./pages/ProductsPage";
import { CartPage } from "./pages/CartPage";


export const CarritoApp = () => {
  return (
    <>
    <NavBarComponent/>
    <div className ='container'>
      <Routes>
      <Route path='/' element ={<ProductsPage></ProductsPage>}></Route>
      <Route path='/carrito' element ={<CartPage to='/'/>}></Route>
      <Route path='/*' element ={<Navigate to='/'/>}></Route>
      </Routes>
    </div>
  </>
  )
}
