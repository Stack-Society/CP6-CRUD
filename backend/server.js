const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs').promises;

const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());

app.use(express.static('static'));

app.get('/produtos', async (req, res) => {
    try {
        const file = path.join(__dirname, 'data', 'produtos.json');
        const data = await fs.readFile(file, 'utf-8');
        const produtos = JSON.parse(data);
        res.json(produtos);
    } catch (error) {
        console.log('Erro ao ler o arquivo', error)
        res.status(500).json({ message: 'Erro ao buscar os produtos' });
    }
});

app.post('/carrinho/adicionar', (req, res) => {
    const { produtoId, quantidade } = req.body;
    console.log(`Produto ${produtoId} adicionado ao carrinho com quantidade: ${quantidade}`)
    res.status(201).json({ message: "Produto adicionado ao carrinho com sucesso" });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})