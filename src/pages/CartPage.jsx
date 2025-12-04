

export const CartPage = () => {
  return (
   <>

<table className="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Precio</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Eliminar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Nombre</td>
      <td>Precio</td>
      <td>Cantidad</td>
      <td>Eliminar</td>
    </tr>
  </tbody>
</table>


<div className="d-grid gap-2">
  <button className="btn btn-primary" type="button">Comprar</button>
</div>


   </>
  )
}
