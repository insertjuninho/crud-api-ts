# CRUD API

### Aplicação desenvolvida com NodeJS, ExpressJS , TypeScript e MongoDB

É uma aplicação de carta de natal, onde e necessário um logar no sistema onde irá gerar um JWT e com isso poderá realizar cadastro de carta de natal, ano novo etc. 


## Iniciando o projeto LOCAL
- Clone o repositório
- Dentro da pasta com o projeto clonado rode o comando

```
    npm install -D

```
--- Depois da instalação, rode o comando dentro de SRC 

```
nodemon index

```
## Usando o projeto Via Heroku
link: https://apicrudrest.herokuapp.com/

## Routes

router.group("/public", router => {
    
    routes.post('/register', UserController.create)
    payload de registro: { "name": "name", "email":"email", "password":"passowrd" }
    
    routes.get('/sigin', UserController.index)
    payload de login: { "email":"email", "password":"passowrd" }

});
   
   
### Para usar as routas "private" será necessário usar o token jwt no Authotization

router.group("/private", router => {

    router.post('/create',   controller.create);
    payload para criar as carta de natal: { "titulo":"titulo", "conteudo":"conteudo"}
    
    Retorna todas as cartas cadastradas no banco
    router.get('/full',     controller.full);
    
    routes.put('/update/:id', cartaNatalController.update)
    payload para alterar a carta de natal: {"titulo":"titulo", "conteudo":"conteudo"}
    
     routes.delete('/delete/:id', cartaNatalController.delete)
    Só passar o ID como parametro na parâmetro

}).use(authMiddleware)
    
  
## Banco

Estou usando o MongoDB cloud, com isso não será necessário rodar o banco local

### Libs utilizadas

* jsonwebtoken
* body-parser,
* cors,
* express,
* mongodb,
* mongoose,
* nodemon,
* bcryptjs,
* dotenv,
* express-router-group

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/35452628" width="100px;" alt="Foto do Alexandre Junior no GitHub"/><br>
        <sub>
          <b>Alexandre Junior</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
