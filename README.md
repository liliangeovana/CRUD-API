# CRUD-API
Projeto de Restful CRUD API para aprendizagem com NodeJS, Express e MongoDB.

# Primeiros comandos


- No terminal, digita-se `npm init -y` para iniciar um novo projeto Node.js e criar um arquivo `package.json`.
    - O comando `npm init` é usado para inicializar um novo projeto Node.js.
    - O parâmetro `-y` ou `--yes` indica que todas as perguntas feitas durante o processo de inicialização serão automaticamente respondidas com os valores padrão, sem a necessidade de interação do usuário.
    - O arquivo package.json gerado contém informações básicas sobre o projeto e suas dependências (como nome, versão, dependências, scripts de execução, autor e outras informações relevantes). 

- Cria-se o arquivo `server.js` que pode ser executado por meio de comando diretamente no terminal
 ~~~javascript
console.log("Executando arquivo server.js")
 ~~~
> No terminal: Executando arquivo server.js

- Porém, o arquivo do servidor pode ser rodado dentro do `package.json`

~~~json
{
  "name": "crud-api",
  "version": "1.0.0",
  "description": "Projeto de Restful CRUD API para aprendizagem.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    //ARQUIVO DO SERVIDOR ADICIONADO
    "server": "node server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
 ~~~
 - Para executar o arquivo por meio do `package.json`

~~~
npm run server (ou outro nome definido)
~~~

# EXPRESS
- O Express é um framework do NodeJS que permite gerar aplicações web mais facilmente.

- Para instalar, digitar no terminal:
~~~
npm install (ou i) express
~~~
- No arquivo `package.json` é acrescentado `dependencies: express`

## Aplicação Express

- No arquivo de `server.js` serão criados os comandos para a aplicação utilizando o framework.

- Pode-se utilizar como base o código encontrado no repositório: https://www.npmjs.com/package/express?activeTab=readme

### Comandos
1. Criar a variável express e requisitar o pacote `express` que se encontra dentro de `node_modules`

2. Criar uma variável `app` que chamará a função `express()`

3. Temos o código `app.listen(3000)`
    > A função app.listen() é usada para iniciar o servidor e fazer com que ele escute as requisições HTTP em uma porta específica.
    - Assim, temos: 
    ~~~javascript
    app.listen(3000, ()=>{
    console.log('Node API app está rodando na porta 3000')
    })
    ~~~
    > Onde ( () ) é uma função de retorno.
    - Ao executar o `npm run server`:
    > No terminal: Node API app está rodando na porta 3000

### Como executar o website no navegador
- É necessário declarar uma **ROTA**.
    > É possível declarar múltiplas rotas em uma aplicação.
- Assim, ainda no arquivo `server.js`:
~~~javascript
app.get('/', (req, res)=> {

});
~~~
1. `get` = obter a rota.
2. `'/'` = pode ser uma URL ou o diretório raiz.
3. `()` = função de retorno com dois parâmetros.
    - req (request) -> O que o cliente requisita.
    - res (response) -> O que é devolvido ao cliente.

    