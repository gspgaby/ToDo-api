const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();
const bd = require('./infra/sqlite-db');
const usuariosController = require('./controllers/usuarios-controllers.js');
const tarefasController = require('./controllers/tarefas-controllers.js');
app.use(bodyParser.json())
app.use(logRequest);

function logRequest(req, res, next){
  console.log(req.method);
  next();
}
usuariosController(app, bd)
tarefasController(app, bd)

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})

