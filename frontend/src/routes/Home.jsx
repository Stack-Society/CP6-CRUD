import React from 'react'
import Jujutsu from '../assets/jujutsu-26.jpg'
import Bluelock from '../assets/bluelock-28.jpg'
import Chainsawman from '../assets/chainsawman-16.jpg'
import Bokunohero from '../assets/myheroacademia-39.jpg'
import Onepiece from '../assets/onepiece-108.jpg'
import Tokyorevengers from '../assets/tokyorevengers-31.jpg'
import Dragonball from '../assets/coletanea-dragonball.jpg'
import Bleach from '../assets/coletanea-bleach.jpg'
import Kaisen from '../assets/coletanea-jujutsu.jpg'
import Naruto from '../assets/coletanea-naruto.jpg'

const Home = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-6">Novidades</h1>

      <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-6xl mx-auto p-4 rounded-xl bg-gradient-to-b from-gray-900 via-gray-800 to gray-900'>

        {/* Card - Jujutsu */}
        <div className='group w-full max-w-xs mx-auto [perspective:1000px]'>
          <div className='relative h-[460px] w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
            
            {/* frente */}
            <div className='absolute inset-0 [backface-visibility:hidden]'>
              <img src={Jujutsu} alt="Jujutsu Kaisen Volume 26" className='h-full w-full object-cover rounded-xl shadow-lg' />
            </div>

            {/* verso */}
            <div className='absolute inset-0 h-full w-full rounded-xl overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden]'>
              <div className='absolute inset-0'>
                <img src={Jujutsu} alt="Jujutsu Kaisen Volume 26" className='h-full w-full object-cover blur-sm scale-105' />
              </div>
              <div className='relative z-10 flex flex-col justify-center items-center text-center h-full px-4 text-white bg-black/40 rounded-xl'>
                <h2 className='text-xl font-bold mb-2'>Jujutsu Kaisen Vol. 26</h2>
                <p className='text-sm'>O arco final se intensifica com confrontos épicos e revelações impactantes.</p>
                <button className='mt-4 px-4 py-2 bg-white text-blue-600 rounded-full hover:bg-gray-200 transition'>Ver mais</button>
              </div>
            </div>
          </div>
        </div>
              
          
        {/* Card - BlueLock */}
        <div className='group w-full max-w-xs mx-auto [perspective:1000px]'>
          <div className='relative h-[460px] w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>

            {/* Frente */}
            <div className='absolute inset-0 [backface-visibility:hidden]'>
              <img src={Bluelock} alt="Blue Lock Volume 28" className='h-full w-full object-cover rounded-xl shadow-lg' />
            </div>

            {/* Verso */}
            <div className="absolute inset-0 h-full w-full rounded-xl overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className='absolute inset-0'>
                <img src={Bluelock} alt="Blue Lock Volume 28" className='h-full w-full object-cover blur-sm scale-105' />
              </div>
              <div className='relative z-10 flex flex-col justify-center items-center text-center h-full px-4 text-white bg-black/40 rounded-xl'>
                <h2 className='text-xl fontbold mb-2'>Blue Lock Vol. 28</h2>
                <p className='text-sm'>descrição</p>
                <button className='mt-4 px-4 py-2 bg-white text-blue-600 rounded-full hover:bg-gray-200 transition'>Ver mais</button>
              </div>
            </div>
          </div>
        </div>


        {/* Card - Chainsawman */}
        <div className='group w-full max-w-xs mx-auto [perspective:1000px]'>
          <div className='relative h-[460px] w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>

            {/* Frente */}
            <div className='absolute inset-0 [backface-visibility:hidden]'>
              <img src={Chainsawman} alt="Blue Lock Volume 28" className='h-full w-full object-cover rounded-xl shadow-lg' />
            </div>

            {/* Verso */}
            <div className="absolute inset-0 h-full w-full rounded-xl overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className='absolute inset-0'>
                <img src={Chainsawman} alt="Blue Lock Volume 28" className='h-full w-full object-cover blur-sm scale-105' />
              </div>
              <div className='relative z-10 flex flex-col justify-center items-center text-center h-full px-4 text-white bg-black/40 rounded-xl'>
                <h2 className='text-xl fontbold mb-2'>Chainsaw Man Vol. 16</h2>
                <p className='text-sm'>descrição</p>
                <button className='mt-4 px-4 py-2 bg-white text-blue-600 rounded-full hover:bg-gray-200 transition'>Ver mais</button>
              </div>
            </div>
          </div>
        </div>

        {/* Card - Boku no Hero */}
        <div className='group w-full max-w-xs mx-auto [perspective:1000px]'>
          <div className='relative h-[460px] w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>

            {/* Frente */}
            <div className='absolute inset-0 [backface-visibility:hidden]'>
              <img src={Bokunohero} alt="Blue Lock Volume 28" className='h-full w-full object-cover rounded-xl shadow-lg' />
            </div>

            {/* Verso */}
            <div className="absolute inset-0 h-full w-full rounded-xl overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className='absolute inset-0'>
                <img src={Bokunohero} alt="Blue Lock Volume 28" className='h-full w-full object-cover blur-sm scale-105' />
              </div>
              <div className='relative z-10 flex flex-col justify-center items-center text-center h-full px-4 text-white bg-black/40 rounded-xl'>
                <h2 className='text-xl fontbold mb-2'>Boku no Hero Vol. 39</h2>
                <p className='text-sm'>descrição</p>
                <button className='mt-4 px-4 py-2 bg-white text-blue-600 rounded-full hover:bg-gray-200 transition'>Ver mais</button>
              </div>
            </div>
          </div>
        </div>

        {/* Card - One Piece */}
        <div className='group w-full max-w-xs mx-auto [perspective:1000px]'>
          <div className='relative h-[460px] w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>

            {/* Frente */}
            <div className='absolute inset-0 [backface-visibility:hidden]'>
              <img src={Onepiece} alt="Blue Lock Volume 28" className='h-full w-full object-cover rounded-xl shadow-lg' />
            </div>

            {/* Verso */}
            <div className="absolute inset-0 h-full w-full rounded-xl overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className='absolute inset-0'>
                <img src={Onepiece} alt="Blue Lock Volume 28" className='h-full w-full object-cover blur-sm scale-105' />
              </div>
              <div className='relative z-10 flex flex-col justify-center items-center text-center h-full px-4 text-white bg-black/40 rounded-xl'>
                <h2 className='text-xl fontbold mb-2'>One Piece Vol. 108</h2>
                <p className='text-sm'>descrição</p>
                <button className='mt-4 px-4 py-2 bg-white text-blue-600 rounded-full hover:bg-gray-200 transition'>Ver mais</button>
              </div>
            </div>
          </div>
        </div>

        {/* Card - Tokyo Revengers */}
        <div className='group w-full max-w-xs mx-auto [perspective:1000px]'>
          <div className='relative h-[460px] w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>

            {/* Frente */}
            <div className='absolute inset-0 [backface-visibility:hidden]'>
              <img src={Tokyorevengers} alt="Blue Lock Volume 28" className='h-full w-full object-cover rounded-xl shadow-lg' />
            </div>

            {/* Verso */}
            <div className="absolute inset-0 h-full w-full rounded-xl overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className='absolute inset-0'>
                <img src={Tokyorevengers} alt="Blue Lock Volume 28" className='h-full w-full object-cover blur-sm scale-105' />
              </div>
              <div className='relative z-10 flex flex-col justify-center items-center text-center h-full px-4 text-white bg-black/40 rounded-xl'>
                <h2 className='text-xl fontbold mb-2'>Tokyo Revengers Vol. 31</h2>
                <p className='text-sm'>descrição</p>
                <button className='mt-4 px-4 py-2 bg-white text-blue-600 rounded-full hover:bg-gray-200 transition'>Ver mais</button>
              </div>
            </div>
          </div>
        </div>    
      </section>

      <h1 className='text-3xl font-bold text-center my-10 '>Coletâneas</h1>

  <section className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-gradient-to-b from-purple-900 via-pink-800 to gray-900">
    {/* Card - Dragonball */}
    <div className="bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-xl shadow-lg overflow-hidden flex flex-col">
      <img src={Dragonball} alt="Coletânea Dragonball" className="h-48 w-full object-cover" />
      <div className="p-4 flex flex-col flex-grow justify-between">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">Coletânea Dragonball</h3>
        <p className="text-gray-800 text-sm mb-4">A saga épica que revolucionou o mundo dos animes e mangás.</p>
        <button className="self-start px-4 py-2 bg-yellow-700 text-white rounded-full hover:bg-yellow-800 transition">Ver mais</button>
      </div>
    </div>

    {/* Card - Bleach */}
    <div className="bg-gradient-to-b from-indigo-600 to-indigo-800 rounded-xl shadow-lg overflow-hidden flex flex-col">
      <img src={Bleach} alt="Coletânea Bleach" className="h-48 w-full object-cover" />
      <div className="p-4 flex flex-col flex-grow justify-between">
        <h3 className="text-xl font-semibold mb-2 text-white">Coletânea Bleach</h3>
        <p className="text-indigo-200 text-sm mb-4">A aventura dos shinigamis e suas batalhas contra os Hollows.</p>
        <button className="self-start px-4 py-2 bg-indigo-400 text-indigo-900 rounded-full hover:bg-indigo-300 transition">Ver mais</button>
      </div>
    </div>

    {/* Card - Jujutsu Kaisen */}
    <div className="bg-gradient-to-b from-green-500 to-green-700 rounded-xl shadow-lg overflow-hidden flex flex-col">
      <img src={Kaisen} alt="Coletânea Jujutsu Kaisen" className="h-48 w-full object-cover" />
      <div className="p-4 flex flex-col flex-grow justify-between">
        <h3 className="text-xl font-semibold mb-2 text-white">Coletânea Jujutsu Kaisen</h3>
        <p className="text-green-200 text-sm mb-4">Os confrontos sobrenaturais mais intensos e os feiticeiros poderosos.</p>
        <button className="self-start px-4 py-2 bg-green-400 text-green-900 rounded-full hover:bg-green-300 transition">Ver mais</button>
      </div>
    </div>

    {/* Card - Naruto */}
    <div className="bg-gradient-to-b from-orange-500 to-orange-700 rounded-xl shadow-lg overflow-hidden flex flex-col">
      <img src={Naruto} alt="Coletânea Naruto" className="h-48 w-full object-cover" />
      <div className="p-4 flex flex-col flex-grow justify-between">
        <h3 className="text-xl font-semibold mb-2 text-white">Coletânea Naruto</h3>
        <p className="text-orange-200 text-sm mb-4">A jornada do ninja que sonha em ser Hokage e proteger sua vila.</p>
        <button className="self-start px-4 py-2 bg-orange-400 text-orange-900 rounded-full hover:bg-orange-300 transition">Ver mais</button>
      </div>
    </div>
  </section>

    </>
  )
}

export default Home