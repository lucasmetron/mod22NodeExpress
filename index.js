var express = require("express");
var app = express();
var alunos = require("./routers/aluno")


app.use(express.urlencoded());

app.use("/teste", alunos);

app.get("/", (req, res) => {

    res.send("Hello wolrd! TESTE :)")
})


app.listen(3000, () => {
    console.log("Servidor rodando...")
})

