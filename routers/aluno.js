let express = require('express');
let router = express.Router();

let alunos = [
    { id: 0, nome: "José" },
    { id: 1, nome: "Maria" },
    { id: 2, nome: "João" },
    { id: 3, nome: "Marcos" }
]

router.get("/", (req, res, next) => {

    let aluno = alunos[req.body.id];
    if (aluno) {
        res.json(aluno);
        console.log(req.body);
        console.log(alunos[req.body.id]);
    } else {
        next()
    }


})

router.get("/", (req, res, next) => {

    let aluno = alunos[req.query.id];
    if (aluno) {
        res.json(aluno)
        console.log(req.query);
        console.log(alunos[req.query.id]);
    } else {
        next("Aluno não encontrado")
    }
})


router.get("/all", (req, res) => {
    console.log(JSON.stringify(alunos))
    res.json(JSON.stringify(alunos))
})

router.get("/:id", (req, res, next) => {
    let aluno = alunos[req.params.id];
    if (!aluno) {
        next("Aluno nao encontrado")
    } else {
        console.log(aluno)
        res.send(aluno)
    }

})

module.exports = router; //Necessário importar o router para ser utilizado onde for chamado este arquivo