module.exports = class UsuariosDAO{
    constructor(bd){
        this.bd = bd;
    }
    listaUsuarios(){
        return new Promise((resolve, reject)=>
        {
            this.bd.all('SELECT * FROM USUARIOS', (err, usuarios) =>
            {
                if(err) reject (err);
                else resolve(usuarios)
            })
        })
    }
    insereUsuario(usuario){
        return new Promise((resolve, reject)=>{
            this.bd.all('SELECT * FROM USUARIOS (NOME, EMAIL, SENHA) VALUES (?, ?, ?)'
            , [usuario.nome, usuario.email, usuario.senha]
            , (err) => {
                if(err) {
                    reject('Usuario não pode ser inserido')
                } else {
                    resolve('Usuario inserido com sucesso')
                }
            })
        })
    }
};

module.exports = UsuariosDao;