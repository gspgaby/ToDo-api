# Projeto Módulo 3 ToDo api com Node.js

O projeto do Módulo 3 da Resilia Educação consiste na criação de um ToDo API no padrão API REST com Node.js para gerenciamento dos registros de usuários e tarefas.

## Recursos

- Criação de novos usuários e tarefas;
- Alteração de registros de usuários e tarefas existentes;
- Exclusão de registros de usuários e tarefas existentes;
- Consulta de registros de usuários e tarefas existentes.

## Pré-requisitos necessários para a utilização da Api

- Instale NodeJS em seu computador.
- Clone os aquivos do repositório.
```sh
git clone https://github.com/gspgaby/ToDo-api.git
```
-Após entrar na pasta clonada, instale via terminal utilizando o comando:
```sh
npm install 
```
Em seguida, inicie a aplicação via terminal utilizando o comando:
```sh
npm run dev 
```

## 🛠️ Ambiente de construção

* [JavaScript]
* [NodeJS]
* [NPM]
* [Body-parser]
* [Cors] 
* [Express] 
* [SQLite3]
<br>

## Rotas

#### GET
Consulta de todos os registros:
<br>
- http://localhost:3000/usuarios
- http://localhost:3000/tarefas 
<br>

Consultas individuais:

<br>
- http://localhost:3000/usuarios/email
- http://localhost:3000/tarefas/titulo

#### POST
Criação de novos usuários e tarefas:

- http://localhost:3000/usuarios
- http://localhost:3000/tarefas 

#### PUT
Atualização de usuários e tarefas:

- http://localhost:3000/usuarios/email 
- http://localhost:3000/tarefas/titulo

#### DELETE
Exclusão de usuários e tarefas:

- http://localhost:3000/usuarios/email
- http://localhost:3000/tarefas/titulo
