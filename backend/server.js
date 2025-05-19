const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs').promises;

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.static('static'));

const filePath = path.join(__dirname, 'data', 'dados.json');

// GET - listar produtos
app.get('/produtos', async (req, res) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const produtos = JSON.parse(data);
    res.json(produtos);
  } catch (error) {
    console.log('Erro ao ler o arquivo', error);
    res.status(500).json({ message: 'Erro ao buscar os produtos' });
  }
});

// POST - criar novo produto
app.post('/produtos', async (req, res) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const produtos = JSON.parse(data);
    const novoProduto = { id: Date.now(), ...req.body };
    produtos.push(novoProduto);
    await fs.writeFile(filePath, JSON.stringify(produtos, null, 2));
    res.status(201).json(novoProduto);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao adicionar produto' });
  }
});

// PUT - editar produto
app.put('/produtos/:id', async (req, res) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const produtos = JSON.parse(data);
    const id = parseInt(req.params.id);
    const index = produtos.findIndex(p => p.id === id);

    if (index === -1) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    produtos[index] = { id, ...req.body };
    await fs.writeFile(filePath, JSON.stringify(produtos, null, 2));
    res.json(produtos[index]);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar produto' });
  }
});

// DELETE - excluir produto
app.delete('/produtos/:id', async (req, res) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    let produtos = JSON.parse(data);
    const id = parseInt(req.params.id);
    const novoArray = produtos.filter(p => p.id !== id);

    if (novoArray.length === produtos.length) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    await fs.writeFile(filePath, JSON.stringify(novoArray, null, 2));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar produto' });
  }
});

app.post('/adicionar', (req, res) => {
  const { produtoId, quantidade } = req.body;
  console.log(`Produto ${produtoId} adicionado ao carrinho com quantidade: ${quantidade}`);
  res.status(201).json({ message: "Produto adicionado ao carrinho com sucesso" });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
