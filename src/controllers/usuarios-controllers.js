const UsuariosDAO = require('../src/DAO/usuarios-dao.js');
//const usuarioModel = ('..src/models/usuario.js')

function usuariosController(app, bd){
  const DAO = new UsuariosDao(bd)

  app.get('/usuarios', async (req, res) => {
    try {
      let usuarioListado = await DAO.listaUsuarios();
      res.send(usuarioListado);
    } catch (e) {
      res.send({ mensagem: `Falha ao listar usuarios` });
    }
  });
  app.post('/usuarios', async (req, res)=> {
    try {
      const body = req.body;
      const novoUsuario = new UsuarioModel(
        0,
        body.NOME,
        body.EMAIL,
        body.SENHA
      );
      let novoUsuarioCriado = await DAO.insereUsuarios(novoUsuario);
      res.send(novoUsuarioCriado);
    } catch (e) {
      res.send({ mensagem: `Falha ao criar novo usuario` });
    }
  });

  app.get("/usuarios/:email", async (req, res) =>{
    try {
      let email = req.params.email;
      let usuarioListadoPorEmail = await DAO.listaUsuarioPorEmail(email);
      res.send(usuarioListadoPorEmail);
    } catch (e) {
      res.send({ mensagem: `Falha ao listar usuarios ${email}` });
    }
  });

  app.delete("/usuarios/:email", async (req, res) =>{
    try {
      let email = req.params.email;
      await DAO.deletaUsuario(email);
      res.send({ mensagem: `Usuario ${email} deletado com sucesso`});
    } catch (e) {
      res.send({mensagem: `Falha ao deletar usuario ${email}`}) 
      }
    });

    app.put ('/usuarios/:email', async (req,res) => {
      try {
        let email = req.params.email;
        const body = req.body;
        await DAO.alteraUsuario(email, body);
        res.send({ mensagem: `Usuario ${email} alterado com sucesso` });
      } catch (e) {
        res.send({ mensagem: `Falha ao alterar usuario ${email}` });
      }
    });
  }

 module.exports = usuariosController;