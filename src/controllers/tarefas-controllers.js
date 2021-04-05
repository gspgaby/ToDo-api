function tarefasController(app){
    let tarefaID = 1;
    
    app.get('/tarefas', (req, res) => {
      return res.json({
        tarefas:[{
          tarefaID: tarefaID++,
          titulo:'titulo',
          descricao:'string',
          data: new Intl.DateTimeFormat("pt-br", {}).format(
            new Date())
        }]
      })
    })

    app.post('/tarefas', (req, res) => {
      return res.json({
        tarefas:[{
          tarefaID: tarefaID++,
          titulo:'titulo',
          descricao:'string',
          data: new Intl.DateTimeFormat("pt-br", {}).format(
            new Date())
        }]
      })
    })
  }
   module.exports = tarefasController;