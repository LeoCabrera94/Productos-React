import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FavImg from '../img/me-gusta.png'
import NoFav from '../img/me-gusta-relleno.png'

export default function Producto({producto,agregarFavoritos,quitarFavoritos}) {

const[favorito, setFavorito] = useState(false)
function handleClick(){
  if(favorito){
    quitarFavoritos(producto)
    setFavorito(false)
  }else{
    agregarFavoritos(producto)
    setFavorito(true)
  }
}
  return (
    <div className="producto">
        <Link to={`/producto/${producto.id}` }><img src={producto.image} alt=""/></Link>
        <div className="info">
          <p>{producto.title}</p>
          <mark>${producto.price}</mark>
        </div>
{
  favorito ? <img className="fav-icon2" onClick={handleClick} src={NoFav} alt="" />
  :
  <img className="fav-icon2"  onClick={handleClick} src={FavImg} alt="" />
}

    </div>
  )
}
