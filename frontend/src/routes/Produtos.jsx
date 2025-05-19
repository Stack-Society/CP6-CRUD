import React, { useState, useEffect } from 'react';

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const [filtroGenero, setFiltroGenero] = useState('todos');

  useEffect(() => {
    fetch('http://localhost:3001/produtos')
      .then(res => res.json())
      .then(data => setProdutos(data))
      .catch(err => console.error('Erro ao buscar produtos:', err));
  }, []);

  const generos = ['todos', 'Shounen', 'Romance', "Ação", 'Comédia romântica', 'Seinen', 'Isekai'];

  const produtosFiltrados = filtroGenero === 'todos'
    ? produtos
    : produtos.filter(prod => prod.genero.includes(filtroGenero));

  return (
    <div className="flex p-6 gap-6">
      {/* Aside com filtros */}
      <aside className="w-1/5 border-r pr-4">
        <h2 className="text-xl font-semibold mb-4">Filtrar por Gênero</h2>
        <ul className="space-y-2">
          {generos.map(genero => (
            <li key={genero}>
              <button
                className={`w-full text-left px-4 py-2 rounded 
                ${filtroGenero === genero ? 'bg-purple-700 text-white' : 'hover:bg-purple-100'}`}
                onClick={() => setFiltroGenero(genero)}
              >
                {genero.charAt(0).toUpperCase() + genero.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Lista de produtos */}
      <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {produtosFiltrados.map(prod => (
          <div
            key={prod.id}
            className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-all"
          >
            <img 
              src={prod.imagem}
              alt={prod.descricao}
              className="w-full h-70 object-cover rounded mb-2"
            />

            <h3 className="text-lg font-bold mb-2">{prod.titulo}</h3>
            <p className="text-sm text-gray-600">Gênero: {prod.genero.join(", ")}</p>
            <p className="text-sm text-gray-600 mb-4">Preço: R$ {prod.preco}</p>
            <p className="text-sm text-gray-600 mb-4">Descrição: {prod.descricao}</p>
            <p className='text-sm text-gray-600 mb-4'>Autor: {prod.autor}</p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
              Adicionar ao carrinho
            </button>
          </div>
          
        ))}
      </main>
    </div>
    
  );
};

export default Produtos;
