const express = require("express");
const path = require('path');

const app = express(); //Desta forma inicializa o objeto express.

let mid = (req, res) => {
    res.type("html")
    res.send("<h1>Hello world! From GET!</h1>")
};


app.use("/meusite", express.static(path.join(__dirname, 'client'))) //função path.join() junta o endereço |___dirname substitui o ./ | 'client' é o nome da pasta onde estão os arquivos estáticos.

app.get("/", mid)

app.put("/", mid)

app.post("/", mid)

app.delete("/", mid)


const PORT = 5000;
app.listen(PORT, () => { //Fica escutando a porta 3000
    console.log(`Server running on Port: ${PORT}`)
})
