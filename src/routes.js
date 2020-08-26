const { Router } = require('express');
const AgendaController = require('../controller/Agenda')

const routes = Router();


routes.get('/list', AgendaController.list);

module.exports = routes;