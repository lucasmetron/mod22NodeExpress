const express = require("express");
const path = require('path');

const app = express();

const PORT = 5000;

app.use(express.static(path.join(__dirname, 'client'))) //função path.join() junta o endereço |___dirname substitui o ./ | 'client' é o nome da pasta onde estão os arquivos estáticos.
// app.use(express.static("C:/Users/dell/Desktop/ProgWeb/mod22NodeExpress/client")) //poderia ser assim

app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`)
})
