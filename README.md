# Atividade — Desenvolvimento de APIs com Express.js

## Sobre o projeto

Esta atividade tem como objetivo desenvolver três aplicações independentes utilizando **Node.js, TypeScript e Express.js**, explorando os fundamentos da criação de APIs REST.

Os projetos trabalham com requisições do tipo POST, leitura do corpo da requisição (Body), validação de dados, manipulação de informações e utilização de códigos de status HTTP.

Cada exercício possui sua própria estrutura e configuração, sendo todos versionados em um único repositório no GitHub.

## Tecnologias utilizadas

- Node.js
- TypeScript
- Express.js
- JavaScript
- JSON
- Git e GitHub
- Postman / Thunder Client

## Estrutura do repositório

```text
AtividadeRoutes/
│
├── Mensagem/
│   ├── src/
│   │   ├── models/
│   │   │   └── mensagem.ts
│   │   ├── controllers/
│   │   │   └── controller.ts
│   │   ├── routes/
│   │   │   └── routes.ts
│   │   └── app.ts
│   ├── package.json
│   └── tsconfig.json
│
├── Soma/
│   ├── src/
│   │   ├── models/
│   │   │   └── soma.ts
│   │   ├── controllers/
│   │   │   └── controller.ts
│   │   ├── routes/
│   │   │   └── routes.ts
│   │   └── app.ts
│   ├── package.json
│   └── tsconfig.json
│
├── Login/
│   ├── src/
│   │   ├── models/
│   │   │   └── usuarios.ts
│   │   ├── controllers/
│   │   │   └── controller.ts
│   │   ├── routes/
│   │   │   └── routes.ts
│   │   └── app.ts
│   ├── package.json
│   └── tsconfig.json
│
└── README.md