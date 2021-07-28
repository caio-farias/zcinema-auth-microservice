# zcinema-auth-microsservice

## Depedências para inicializar o projeto
* Node.js

Neste caso, usaremos o [yarn ](https://yarnpkg.com/) como gerenciador de pacotes do Node.js.
## Passo a passo
* No diretório raiz do projeto execute:
```
yarn
```
* Por fim, executaremos a aplicação:
```
yarn start
```
Pronto! Aplicação deve estar rodando 100% agora.

## Endpoints

### Autenticação

* Autenticar:
    * Endpoint (POST): https://zcinema-auth-microservice.herokuapp.com/auth
    * Authorization: 'Bearer VALOR_DO_TOKEN' 
    * Body: 
    ```
    {
       "email": "CAIO@email.com",
       "password": "123456"
    }
    ```
