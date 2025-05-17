import React from 'react'
import { Link } from 'react-router-dom'
import Imagem from '../assets/Emilia_icon1.jpg'

const Nav = () => {
  return (
    <>
      <header className='flex items-center justify-between bg-[#b0c4de] h-24'> 
      <div className='flex item-center gap-4'>  
        <img className='w-16 h-16 rounded-full' src={Imagem} alt="Icone da loja" />
        <h1 className='text-3xl font-semibold mt-3'>Mangá Society</h1>
      </div>

        <nav className='flex gap-4 p-4 underline'>
          <Link to="/" className='hover:text-white'>Home</Link>
          <Link to="/Produtos" className='hover:text-white'>Loja</Link>
          <Link to="/Contato" className='hover:text-white'>Contato</Link>
          <Link to="/Sobre" className='hover:text-white'>Sobre</Link>
        </nav>
      </header>
      <hr />

    </>
  )
}

export default Nav