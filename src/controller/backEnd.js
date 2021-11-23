//Constantes
const express = require('express');
const bodyParser = require('body-parser');
const model = require('../../models/funcionario')
const cors = require('cors');

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false})); //trabalhar com requisições post
app.use(bodyParser.json()); //trabalhar com requisições json

//Rotas
// app.post('/salvarFuncionario', async (req, res) => {
//     console.log('Chamou Método Postss');
//     console.log(req);
//     let reqs = await model({
//         'nome': req.body.nomeFuncionario,
//         'telefone': req.body.telefoneFuncionario,
//         'createAt': new Date(),
//         'updateAt': new Date()
//     });
//     if(reqs){
//         res.send(JSON.stringify('O funcionário foi cadastrado com sucesso!'));
//     }
// });


//Start server
app.listen(3000,(req,res)=>{
    console.log('Servidor Rodando new');
});

