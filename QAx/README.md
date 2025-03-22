Claro! Abaixo está um modelo de README que você pode usar para documentar a estrutura do seu projeto com as informações e comandos que você forneceu.

```markdown
# Projeto QAx/cypress-express-mark

Este projeto consiste em três partes principais: QAx (teste automatizado com Cypress), uma API e uma aplicação web. Siga as instruções abaixo para configurar e executar cada parte do projeto.

## Estrutura do Projeto

```
QAx/
├── cypress-express-mark/
│   ├── (arquivos do Cypress)
│   └── ...
├── API/
│   ├── (arquivos da API)
│   └── ...
└── WEB/
├── (arquivos da aplicação web)
└── ...
```

## Configuração do Cypress

1. Navegue até a pasta `cypress-express-mark`:

   ```bash
   cd QAx/cypress-express-mark
   ```

2. Crie um novo projeto Node:

   ```bash
   yarn init
   ```

3. Instale o Cypress:

   ```bash
   yarn add cypress@12.2.0 -D
   ```

4. Abra o Visual Studio Code:

   ```bash
   code .
   ```

5. Inicie o Cypress:

   ```bash
   yarn cypress open
   ```

## Configuração da API

1. Navegue até a pasta `API` do projeto:

   ```bash
   cd API
   ```

2. Instale as dependências do Node:

   ```bash
   npm install
   ```

3. Inicialize o banco de dados:

   ```bash
   npm run db:init
   ```

4. Coloque a API no ar:

   ```bash
   npm run dev
   ```

## Configuração da Aplicação Web

1. Navegue até a pasta `WEB` do projeto:

   ```bash
   cd WEB
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Coloque a aplicação web no ar:

   ```bash
   npm run dev
   ```

## Acessando a Aplicação

Abra seu navegador e acesse a aplicação em: [http://localhost:3000](http://localhost:3000)

## Contribuição

Sinta-se à vontade para contribuir com este projeto! Crie um fork, faça mudanças e envie um pull request.

## Licença


```

Você pode personalizar ainda mais este README com informações específicas sobre o projeto, como funcionalidades, como contribuir, e qualquer outra informação relevante.