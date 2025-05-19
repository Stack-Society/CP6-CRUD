import React from 'react'
import { Link } from 'react-router-dom'
import Imagem from '../assets/logo.png'

const Nav = () => {
  return (
    <>
      <header className='flex items-center justify-between bg-[#b0c4de] h-24'> 
      <div className='flex item-center gap-4'>  
        <img className='w-60 rounded-full mx-5' src={Imagem} alt="Icone da loja" />
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