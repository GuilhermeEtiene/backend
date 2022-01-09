## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Typeorm](https://github.com/typeorm/typeorm)
- [PostgreSQL](https://www.postgresql.org/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs?activeTab=readme)
- [JSONWebToken](https://github.com/auth0/node-jsonwebtoken#readme)

## 🚀 Como executar

- Clone o repositório
- Rode `yarn` para baixar as dependências
- Configure seu banco de dados inserindo as informações no .env.example e renomeie para .env
- Rode `yarn typeorm migration:run` para criar as tabelas do banco de dados.
- Rode o `yarn dev` para iniciar a aplicação.

Por fim, a aplicação estará disponível em `http://localhost:3333` ou na porta que você escolher no momento da configuração.
