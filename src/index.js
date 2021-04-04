const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();

const usuariosController = require('./controllers/usuarios-controllers.js');
const tarefasController = require('./controllers/tarefas-controllers.js');
app.use(bodyParser.json())
app.use(logRequest);

function logRequest(req, res, next){
  console.log(req.method);
  next();
}
usuariosController(app)
tarefasController(app)

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})

