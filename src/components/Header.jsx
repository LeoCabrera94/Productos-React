import React from 'react'
import { Link } from 'react-router-dom'
import LogoImg  from '../img/alto-icono.png.jpeg'
export default function Header() {
  return (
    <header className='header'>
     <Link className='icon' to={'/'}><img src={LogoImg} alt=""/></Link>
     <nav className='navbar'>
    
      <Link to={'/productos'}>Productos</Link>
      <Link to={'/favoritos'}>Favoritos</Link>
     </nav>
    </header>
  )
}
