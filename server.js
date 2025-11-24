const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Configurando o EJS como motor de visualização
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Definindo a pasta 'public' para arquivos estáticos (CSS, Imagens)
// Isso permite que no HTML você chame '/css/style.css' direto.
app.use(express.static(path.join(__dirname, 'public')));

// Rota Principal
app.get('/', (req, res) => {
    // Aqui futuramente buscaremos dados do banco para enviar para a view
    // Por enquanto, vamos apenas renderizar a home
    res.render('index');
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});