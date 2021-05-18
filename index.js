const express = require("express");
const path = require('path');

const app = express(); //Desta forma inicializa o objeto express.



app.use("/meusite", express.static(path.join(__dirname, 'client'))) //função path.join() junta o endereço |___dirname substitui o ./ | 'client' é o nome da pasta onde estão os arquivos estáticos.

app.get("/", (req, res) => {
    res.type("html")
    res.send("<h1>Hello world! From GET!</h1>")
});

app.post("/", (req, res) => {
    res.type("html")
    res.send("<h1>Hello world! From post!</h1>")

});

app.put("/", (req, res) => {
    res.type("html");
    res.send("<h1>Hello world! From put!</h1>")
});

app.delete("/", (req, res) => {
    res.type("html");
    res.send("<h1>Hello world! From delete!</h1>")
})


const PORT = 5000;
app.listen(PORT, () => { //Fica escutando a porta 3000
    console.log(`Server running on Port: ${PORT}`)
})
