const express = require('express');
const cors = require('cors');
//Importando as rotas
const routes = require('./routes');

const app = express();

//Informando a API que está sendo utilizada nas requisições
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);
