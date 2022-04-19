const express = require('express');
const app = express();



// ABRIR O SERVER
app.listen(8081, () => {
    console.log("Servidor rodando na URL http://localhost:8081");
});