function usuariosController(app){
  app.get('/usuarios', (req, res) => {
    res.send('Rastreamento feito com nodemon')
  })    

  app.post('/usuarios', (req, res) => {
    console.log('[INFO] cheguei aqui')

    res.send(req.body)
  })
}

 module.exports = usuariosController;