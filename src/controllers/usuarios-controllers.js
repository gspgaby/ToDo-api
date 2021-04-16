const { response } = require('express');
const UsuariosDAO = require('../DAO/usuarios-DAO');
const usuarioModel = ('../models/usuario.js')
const bd = require('../infra/sqlite-db')
const DAO = new UsuariosDao(bd)

function usuariosController(app, bd){
  app.get('/usuarios', (req, res) => {
    DAO.listaUsuarios()
      .then((usuarios) => res.send(usuarios))
      .catch((err) => res.send(err))
    })

  app.post('/usuarios', (req, res)=> {
      const body = req.body;
      let user = new usuarioModel(body.nome, body.email, body.senha)
      console.log(user)
      DAO.insereUsuario(user)
      .then((mensagemSucesso) => res.send({mensagem: mensagemSucesso}))
      .catch((mensagemFalha) => res.send({mensagem: mensagemFalha}))
    });

  app.get("/usuarios/:email", (req, res) =>{
      const email = req.params.email;
      const users = bd.usuarios.find(usuarios => usuarios.email == email) 
      console.log(users);
      res.send(users)
    });

  app.delete("/usuarios/:email", (req, res) =>{
      const email = req.params.email;
      const users = bd.usuarios
      
      for(let i = 0; i < users.length; i++) {
        if (email === users[i].email) {
          users.splice(i,1) 
        }
      }
      res.send({mensagem: `${email} deletado com sucesso`}) 
      
      });

    app.put ('/usuarios/:email', (req,res) => {
      const email = req.params.email;
      bd.usuarios.forEach((usuarios) => {  
        if(email == usuarios.email){
          usuarios.senha = req.body.senha;
          res.send({mensagem: `${email} Usuario alterado com sucesso`})
        }
        else{
          res.send(`[ERROR]:${email} Usuario não encontrado`)
        }
      })
  })    
}

 module.exports = usuariosController;