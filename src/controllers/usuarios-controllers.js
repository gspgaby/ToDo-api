function usuariosController(app){
  app.get('/usuarios', (req, res) => {
    return res.json({
      user: {
        nome: 'Gabriella dos Santos Pereira',
        email: "gspgaby@gmail.com",
        senha: "jhkhkhkjhk"
      }
    })

  })

  app.post('/usuarios', function (req, res) {
    return res.json({
      user: {
        nome: 'Gabriella dos Santos Pereira',
        email: "gspgaby@gmail.com",
        senha: "jhkhkhkjhk"
      }
    })
  })
}

 module.exports = usuariosController;