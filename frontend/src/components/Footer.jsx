import React from 'react'
import Instagram from '../assets/instagram.png'
import Twitter from '../assets/twitter.png'
import Whatsapp from '../assets/whatsapp.png'

const Footer = () => {
  return (
    <>
    <hr className='mt-10' />
      <footer className='bg-[#b0c4de] w-full h-60 flex flex-col justify-center items-center text-gray-700 px-6 py-8'>
      <p className='text-sm mb-4'>&copy; 2025 Mangás Society. Todos os direitos reservados.</p>
  
        <div className='flex space-x-6 mb-4'>
          <a href="#" className='flex items-center space-x-2 hover:text-blue-700 transition'>
            <img src={Instagram} alt="Instagram" className='w-6 h-6' />
              <span>Instagram</span>
          </a>
          <a href="#" className='flex items-center space-x-2 hover:text-blue-700 transition'>
            <img src={Twitter} alt="Twitter" className='w-6 h-6' />
            <span>Twitter</span>
          </a>
          <a href="#" className='flex items-center space-x-2 hover:text-blue-700 transition'>
            <img src={Whatsapp} alt="Whatsapp" className='w-6 h-6' />
            <span>Whatsapp</span>
          </a>
        </div>

      </footer>

    </>
  )
}

export default Footer