const tarefaDao = require("../DAO/tarefa-dao.js");
//const tarefaModel = require('../models/tarefas.js')

function tarefasController(app, bd){
  const DAO = new tarefaDao(bd);

    app.get('/tarefas', async (req, res) => {
      try {
      let consultarTarefa = DAO.listaTarefas();
      res.send(consultarTarefa);
    } catch (e) {
      res.send({ mensagem: `Falha ao listar ${titulo}` });
    }
  });

      app.post('/tarefas', async (req, res)=> {
        try {
          const tarefa = req.body;
    
          const novaTarefa = new tarefaModel(
            0,
            tarefa.TITULO,
            tarefa.DESCRICAO,
            tarefa.STATUS,
            tarefa.DATACRIACAO,
            tarefa.ID_USUARIO
          );
    
          let novaTarefaCriada = DAO.insereTarefa(novaTarefa);
          res.send(novaTarefaCriada);
        } catch (e) {
          res.send({ mensagem: `Falha ao incluir tarefa` });
        }
      });
  
      app.get("/tarefas/:titulo", async(req, res) => {
    try {
      const titulo = req.params.titulo;
      let consultarTarefaPorTitulo = await DAO.listaTituloPorTarefas(titulo);
      res.send(consultarTarefaPorTitulo);
    } catch (e) {
      res.send({ mensagem: `Falha ao consultar ${titulo}` });
    }
  });

  
      app.delete("/tarefas/:titulo", async (req, res) =>{
        try{
          let titulo = req.params.titulo;
          await DAO.deletaTarefa(titulo)
          res.send({ mensagem: `${titulo} deletado com sucesso` });
        } catch (e) {
          res.send({ mensagem: `Falha ao deletar ${titulo}` });
        }
        });
  
      app.put ('/tarefas/:titulo', async (req,res) => {
        try{
          let titulo = req.params.titulo;
          const body = req.body;
          await DAO.alteraTarefa(titulo, body)
          res.send({ mensagem: `${titulo} alterado com sucesso` });
        } catch (e) {
          res.send({ mensagem: `Falha ao alterar ${titulo}` });
        }
      });
      }

   module.exports = tarefasController;