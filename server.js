const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

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
    const projetos = [
        {
            id: 0,
            titulo: "Casa 0",
            descriao: "Essa é a descricao da Casa 0.",
            imagem: "/img/FACHADA0.png"
        },
        {
            id: 1,
            titulo: "Casa 1",
            descriao: "Essa é a descricao da Casa 1.",
            imagem: "/img/FACHADA1.png"
        },
        {
            id: 2,
            titulo: "Casa 2",
            descriao: "Essa é a descricao da Casa 2.",
            imagem: "/img/FACHADA2.png"
        },
        {
            id: 3,
            titulo: "Casa 3",
            descriao: "Essa é a descricao da Casa 3.",
            imagem: "/img/FACHADA3.png"
        },
        {
            id: 4,
            titulo: "Casa 4",
            descriao: "Essa é a descricao da Casa 4.",
            imagem: "/img/FACHADA4.png"
        },
    ];

    res.render('index', { projetos: projetos });
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta${port}`);
});