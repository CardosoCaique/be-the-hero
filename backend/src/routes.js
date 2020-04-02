//Importando o express e demais pacotes
const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//Desacoplando módulo de rotas do express dentro de uma variável
const routes = express.Router();

/*Criando rota*/
/*
 * Tipo de paramentros para as rotas
 * Query Params: Parâmetros  nomeados enviados na rota após "?" (Filtros, Paginação)
 * Route Params; Utilizados para identificar recursos
 * Request Body: Corpo da requisição, usado para criar ou alterar recursos
*/

/*Banco de Dados*/
/*
 * Drive: SSLECT * FROM users
 * Query Builder: table('users').select('*').where();
*/

/*Rotas de Login*/
routes.post('/session', SessionController.create);


/*Rotas Referentes as ONGs*/
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

/*Rotas Referentes do Casos*/
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);



//Exportar as rotas
module.exports = routes;
