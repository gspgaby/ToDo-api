function tarefasController(app){
    app.get('/tarefas', (req, res) => {
      res.send('Rastreamento feito com nodemon')
    })}
   module.exports = tarefasController;