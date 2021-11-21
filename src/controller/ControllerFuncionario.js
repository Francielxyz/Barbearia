//Constantes
const express = require('express');
const bodyParser = require('body-parser');
const model = require('../../models')
const cors = require('cors');

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false})); //trabalhar com requisições post
app.use(bodyParser.json()); //trabalhar com requisições json

//Rotas
app.post('/createFuncionario', async (req, res) => {
    console.log('Chamou Método Post');
    let reqs = await model.funcionario.create({
        'nome': req.body.nomeFuncionario,
        'telefone': req.body.telefoneFuncionario,
        'createAt': new Date(),
        'updateAt': new Date()
    });
    if(reqs){
        res.send(JSON.stringify('O funcionário foi cadastrado com sucesso!'));
    }
});


//Start server
let port = process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
});

