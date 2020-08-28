const { Router } = require('express');
const AgendaController = require('../controller/Agenda');
const InserirDados = require('../controller/InserirDados');
const path = require('path');

const routes = Router();


routes.get('/list', AgendaController.list);

//routes.post('/add', InserirDados.list);

routes.post('/add', InserirDados.add);


routes.get('/', function(req, res){
    res.render(path.join(__dirname+'views/layouts/formulario.handlebars'))
})





module.exports = routes;