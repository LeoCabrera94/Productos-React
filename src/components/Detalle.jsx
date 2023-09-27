import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { obtenerProductoPorId } from "../servicios/ProductoService";


export default function Detalle() {
const [producto, setProducto] = useState({})

 const{id}= useParams()

 useEffect(() => {
  obtenerProductoPorId(id).then((data) => {
    setProducto(data)
    // seteamos a la vxariable de estado
  })
}, [id])


  return (
    <div className="detalle">
      <img src={producto.image} alt="" />
    <div>
      <h3>{producto.title}</h3>
      <blockquote>{producto.description}</blockquote>
      <mark>{producto.price}</mark>
    </div>
    </div>
    
  )
}
