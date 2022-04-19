
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", (req, res) => {
    res.sendFile(__dirname + "/html/sobre.html");
});

app.get("/blog", (req, res) => {
    res.send("Bem-Vindo ao meu blog!");
});

app.get("/ola/:nome/:cargo/:cor", (req, res) => {
    res.send("<h1> Ola "+ req.params.nome + "</h1>" + "<h2> Seu cargo e: " + req.params.cargo + "</h2>" + "<h3> Sua cor favorita e: " + req.params.cor + "</h3>");
});
