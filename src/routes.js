const { Router } = require('express');
const AgendaController = require('../controller/getData')

const routes = Router();

routes.get('/list', AgendaController.list);

module.exports = routes;