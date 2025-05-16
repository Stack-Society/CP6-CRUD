import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
        <Link to="/">Home</Link>
        <Link to="/Loja">Loja</Link>
        <Link to="/Contato">Contato</Link>
        <Link to="/Sobre">Sobre</Link>
    </>
  )
}

export default Nav