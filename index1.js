const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');


// CONFIGURAR O HANDLEBARS

// CONFIG
    // TEMPLATE ENGINE
    const hbs = handlebars.create({defaultLayout: 'main'})
    app.engine('handlebars', () => hbs)
    app.set('view engine', 'handlebars');

    // CONEXÃO COM BANCO DE DADOS MYSQL
    const sequelize = new Sequelize('Test', 'root', '', {
        host: "localhost",
        dialect: "mysql"
    });


// ROTAS
app.get('/cad', (req, res) => {
    res.render('formulario')
});




// ABRIR O SERVER
app.listen(8080, () => {
    console.log("Servidor rodando na URL http://localhost:8080");
});