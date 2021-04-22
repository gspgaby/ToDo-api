module.exports = class TarefaDao {
    constructor(bd) {
      this.bd = bd;
    }
  
    listaTarefas() {
      return new Promise((resolve, reject) => {
        this.bd.all('SELECT * FROM TAREFAS', (err, tarefa) => {
          if (err) {
            reject(`Erro na consulta: ${error}`);
          } 
          else {
            resolve(tarefa);
          }
        });
      });
    }
  
    listaTituloPorTarefas(titulo) {
      return new Promise((resolve, reject) => {
        this.bd.all('SELECT * FROM TAREFAS WHERE TITULO = (?)',[titulo],(err, titulo) => {
            if (err) {
              reject(`Erro na consulta do banco`);
            } 
            else {
              resolve(titulo);
            }
          })
        })
      }
  
    insereTarefa(tarefa) {
      return new Promise((resolve, reject) => {
        this.bd.run('INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) VALUES (?,?,?,?,?)',
          [tarefa.titulo,tarefa.descricao,tarefa.status,tarefa.datacriacao,tarefa.id_usuario,],(err) => {
            if (err) {
              reject(`Falha ao inserir tarefa`);
            } 
            else {
              resolve(`Tarefa inserida com sucesso`);
            }
          })
        })
      }
  
    deletaTarefa(titulo) {
      return new Promise((resolve, reject) => {
        this.bd.run('DELETE FROM TAREFAS WHERE TITULO = (?)', [titulo], (err) => {
          if (err) {
            reject(`Falha ao deletar tarefa`);
          } 
          else {
            resolve(`Tarefa deletada com sucesso`);
          }
        })
      })
    }
  
    alteraTarefa(titulo, body) {
      return new Promise((resolve, reject) => {
        this.bd.run('UPDATE TAREFAS SET STATUS = (?), DESCRICAO = (?), WHERE TITULO = (?)', [body.STATUS, body.DESCRICAO, titulo], (err) => {
          if (err) {
            reject('Falha ao alterar tarefa');
          } else {
            resolve('Tarefa alterado com sucesso');
          }
        })
      })
    }
}
  