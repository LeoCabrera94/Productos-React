import Producto from "./Producto";
export default function Productos({productos, agregarFavoritos, quitarFavoritos}) {
 

  return (
  <div className="productos">
    {
     productos.length >  0 ? productos.map(producto=>
         <Producto key={producto.id} producto={producto} agregarFavoritos={agregarFavoritos} quitarFavoritos={quitarFavoritos} />)
         : <p>No hay productos en la lista</p>
      
    }
  </div>)
}
