var express = require("express");
var app = express();

let alunos = [
    { id: 0, nome: "José" },
    { id: 1, nome: "Maria" },
    { id: 2, nome: "João" },
    { id: 3, nome: "Marcos" }
]

app.use(express.urlencoded());

app.get("/", (req, res) => {

    res.send("Hello wolrd! TESTE :)")
})


app.get("/alunos", (req, res) => {

    res.json(JSON.stringify(alunos))
})

app.get("/aluno", (req, res) => {
    console.log(req.body);
    // console.log(req.query) Desta forma deve ser passado o id aluno na url como ex: /aluno?id=0
    let aluno = alunos[req.body.id];
    // let aluno = alunos[req.query.id]; caso use query. 
    res.json(aluno);
})

app.get("/aluno/:id", (req, res) => { //Desta maneira, é possivel passar o id do aluno como ex: /aluno/2
    console.log(req.params);
    let aluno = alunos[req.params.id];
    res.json(aluno);
})

app.listen(3000, () => {
    console.log("Servidor rodando...")
})

