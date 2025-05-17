import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './routes/Home'
import Error from './routes/Error'
import Produtos from './routes/Produtos'
import Sobre from './routes/Sobre'
import Contato from './routes/Contato'
import Nav from './components/Nav'
import Footer from './components/Footer'
import './index.css'

function App() {

  return (
    <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/Produtos' element={<Produtos/>} />
          <Route path='/Contato' element={<Contato/>} />
          <Route path='/Sobre' element={<Sobre/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
