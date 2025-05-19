import React from 'react'

const Contato = () => {
  return (
    <div class="max-w-2xl mx-auto p-8 mt-10 bg-gray-100 rounded-xl text-2xl shadow-md">
      <h2 class="text-4xl font-bold text-gray-800 mb-6">Fale conosco</h2>

      <ul class="space-y-6 text-gray-700">

        <li class="flex items-center gap-4 flex-col">
          <img src="./src/assets/instagram.png" alt="Instagram" class="w-8 h-8"/>
            <a href="https://instagram.com/mangasociety" target="_blank" class="hover:underline">
              @mangasociety
            </a>
        </li>

        <li class="flex items-center gap-4 flex-col">
          <img src="./src/assets/twitter.png" alt="Twitter" class="w-8 h-8"/>
            <a href="https://twitter.com/mangasociety" target="_blank" class="hover:underline">
              @mangasociety
            </a>
        </li>

        <li class="flex items-center gap-4 flex-col">
          <img src="./src/assets/whatsapp.png" alt="WhatsApp" class="w-8 h-8"/>
            <a href="https://wa.me/5511999999999" target="_blank" class="hover:underline">
              (11) 99999-9999
            </a>
        </li>

        <li class="flex items-center gap-4 flex-col">
          <img src="./src/assets/telefone.png" alt="Telefone" class="w-8 h-8"/>
            <a href="tel:+551133334444" class="hover:underline">
              (11) 3333-4444
            </a>
        </li>
      </ul>
    </div>

  )
}

export default Contato