import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const [filtroGenero, setFiltroGenero] = useState('todos');
  const [mostrarAdmin, setMostrarAdmin] = useState(false);
  const [form, setForm] = useState({
    titulo: '',
    autor: '',
    preco: '',
    genero: '',
    descricao: '',
    imagem: '',
    estoque: ''
  });
  const [editandoId, setEditandoId] = useState(null);

  const generos = ['todos', 'Shounen', 'Romance', "Ação", 'Comédia romântica', 'Seinen', 'Isekai'];

  const carregarProdutos = () => {
    fetch('http://localhost:3001/produtos')
      .then(res => res.json())
      .then(data => setProdutos(data))
      .catch(err => console.error('Erro ao buscar produtos:', err));
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  const produtosFiltrados = filtroGenero === 'todos'
    ? produtos
    : produtos.filter(prod => prod.genero.includes(filtroGenero));

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const limparFormulario = () => {
    setForm({
      titulo: '',
      autor: '',
      preco: '',
      genero: '',
      descricao: '',
      imagem: '',
      estoque: ''
    });
    setEditandoId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const novoProduto = {
      ...form,
      preco: parseFloat(form.preco),
      estoque: parseInt(form.estoque),
      genero: form.genero.split(',').map(g => g.trim())
    };

    if (editandoId) {
      await axios.put(`http://localhost:3001/produtos/${editandoId}`, novoProduto);
    } else {
      await axios.post('http://localhost:3001/produtos', novoProduto);
    }

    carregarProdutos();
    limparFormulario();
  };

  const handleEditar = (produto) => {
    setForm({
      titulo: produto.titulo,
      autor: produto.autor,
      preco: produto.preco,
      genero: produto.genero.join(', '),
      descricao: produto.descricao,
      imagem: produto.imagem,
      estoque: produto.estoque
    });
    setEditandoId(produto.id);
    setMostrarAdmin(true);
  };

  const handleExcluir = async (id) => {
    if (confirm("Tem certeza que deseja excluir este mangá?")) {
      await axios.delete(`http://localhost:3001/produtos/${id}`);
      carregarProdutos();
    }
  };

  return (
    <div className="flex flex-col p-6 gap-6">
      {/* Botão para mostrar/ocultar CRUD */}
      <button
        onClick={() => setMostrarAdmin(!mostrarAdmin)}
        className="bg-purple-700 text-white px-6 py-3 rounded hover:bg-purple-800 self-start"
      >
        Criar / Editar / Excluir Mangá
      </button>

      {/* Formulário de CRUD */}
      {mostrarAdmin && (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-purple-50 p-4 rounded shadow">
          <input name="titulo" value={form.titulo} onChange={handleChange} placeholder="Título" required className="p-2 border rounded" />
          <input name="autor" value={form.autor} onChange={handleChange} placeholder="Autor" required className="p-2 border rounded" />
          <input name="preco" value={form.preco} onChange={handleChange} placeholder="Preço" type="number" required className="p-2 border rounded" />
          <input name="estoque" value={form.estoque} onChange={handleChange} placeholder="Estoque" type="number" required className="p-2 border rounded" />
          <input name="genero" value={form.genero} onChange={handleChange} placeholder="Gêneros separados por vírgula" required className="p-2 border rounded" />
          <input name="imagem" value={form.imagem} onChange={handleChange} placeholder="URL da imagem" required className="p-2 border rounded" />
          <textarea name="descricao" value={form.descricao} onChange={handleChange} placeholder="Descrição" required className="p-2 border rounded col-span-1 md:col-span-2" />
          <div className="col-span-1 md:col-span-2 flex gap-4">
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              {editandoId ? 'Atualizar' : 'Cadastrar'}
            </button>
            {editandoId && (
              <button type="button" onClick={limparFormulario} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">
                Cancelar
              </button>
            )}
          </div>
        </form>
      )}

      <div className="flex gap-6">
        {/* Filtros */}
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
                className="w-full h-100 object-cover rounded mb-2"
              />

              <h3 className="text-lg font-bold mb-1">{prod.titulo}</h3>
              <p className="text-sm text-gray-600">Autor: {prod.autor}</p>
              <p className="text-sm text-gray-600">Gênero: {prod.genero.join(", ")}</p>
              <p className="text-sm text-gray-600">Preço: R$ {prod.preco}</p>
              <p className="text-sm text-gray-600 mb-2">Descrição: {prod.descricao}</p>
              <p className="text-sm text-gray-600 mb-2">Estoque: {prod.estoque}</p>

              <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 w-full mb-2">
                Adicionar ao carrinho
              </button>

              {/* Botões admin visíveis apenas quando mostrarAdmin está true */}
              {mostrarAdmin && (
                <div className="flex gap-2">
                  <button onClick={() => handleEditar(prod)} className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 w-full">
                    Editar
                  </button>
                  <button onClick={() => handleExcluir(prod.id)} className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 w-full">
                    Excluir
                  </button>
                </div>
              )}
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Produtos;
