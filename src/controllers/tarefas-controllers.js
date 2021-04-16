const tarefaModel = require('../models/tarefas.js')

function tarefasController(app, bd){
    app.get('/tarefas', (req, res) => {
      bd.all("SELECT * FROM tarefas", function(err, rows){
        if(err){
          throw new Error(`Erro ao rodar consulta: ${err}`)
        }
        else{
        res.send(rows)
        }
      })
      })
  
      app.post('/tarefas', (req, res)=> {
        const body = req.body;
        let tarefas = new tarefaModel(body.titulo, body.descricao, body.status, body.data);
        
        if(body.titulo && body.descricao && body.status && body.data){
          console.log(JSON.stringify(tarefas));
          bd.tarefas.push(tarefas)
          res.send(tarefas)
        };
        res.send("Deu ruim!!!")
      })
  
      app.get("/tarefas/:titulo", (req, res) =>{
      
        const tarefas = req.params.TAREFAS;
        const titulo = bd.usuarios.find(TAREFAS => TAREFAS.TITULO == tarefas) 
        console.log(titulo)
        res.send(titulo)
      });
  
      app.delete("/tarefas/:titulo", (req, res) =>{
        const tarefas = req.params.TAREFAS;
        const titulo = bd.titulo
        
        for(let i = 0; i < tarefas.length; i++) {
          if (titulo === tarefas[i].titulo) {
            users.splice(i,1) 
          }
        }
        res.send({mensagem: `${titulo} deletado com sucesso`}) 
        
        });
  
      app.put ('/tarefas/:titulo', (req,res) => {
        const tarefas = req.params.TAREFAS;
        bd.tarefas.forEach((tarefas) => {  
          if(titulo == tarefas.titulo){
            tarefas.descricao = req.body.descricao;
            tarefas.status = req.body.status;
            res.send({mensagem: `${titulo} Usuario alterado com sucesso`})
          }
          else{
            res.send(`[ERROR]:${titulo} Usuario não encontrado`)
          }
        })
    })    
  }

   module.exports = tarefasController;