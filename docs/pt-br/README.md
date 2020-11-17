
<h1 align="center">
  <em>Be The</em> Hero
</h1>

<p align="center">
  Uma aplicação para ajudar a gerenciar e resolver incidentes de Organizações Não Governamentais (ONGs). Baseado na <strong>Semana Omnistack <code>11.0</code></strong> da <a href="https://rocketseat.com.br">Rocketseat</a>.
</p>

<div align="center">
  <img align="center" src="../home.png" alt="Página inicial web" width="70%" />
</div>

## :book: Propósito
Este repositório foi construído para praticar o desenvolvimento de uma API backend _com express_, uma aplicação frontend _com React_, e uma aplicação mobile _com React-Native_.

## :sparkles: Recursos adicionais
- Todos os projetos foram desenvolvidos em [Typescript](https://www.typescriptlang.org/).
- Os estilos da aplicação web foram desenvolvidos usando [Sass](https://sass-lang.com/).
- O design da aplicação web é responsivo, usando uma abordagem [Generic First](https://www.smashingmagazine.com/2018/12/generic-css-mobile-first/).
- O tema da aplicação web pode ser personalizado usando variáveis.

## :gear: Requisitos
Você vai precisar do [nodejs](https://nodejs.org/) instalado e do [yarn](https://yarnpkg.com/getting-started).

Para o aplicativo **mobile**:
- Instale o Expo CLI usando o comando `npm install -g expo-cli`.
- Configure um dispositivo físico ou um emulador com um sistema iOS ou Android unsado o [Expo](https://docs.expo.io/versions/v36.0.0/get-started/installation/).
- Você precisa adicionar o seu endereço de IP em um arquivo `mobile/.env`, como abaixo:
  ```
  IP=192.168.0.1
  ```

## :rocket: Como executar
> Certifique-se de estar dentro do diretório correspondente ao executar os comandos.

- **backend**:
  - Instale as dependências com `npm install`.
  - Execute as migrações do banco de dados (dev): `npx knex migrate:latest`.
  - E inicie o servidor com `npm start`.

- **frontend**:
  - Instale as dependências com `yarn`.
  - Certifique-se de que o **backend** está executando.
  - E execute a aplicação com `npm start`.

- **mobile**:
  - Instale as dependências usando o comando `expo install`.
  - Verifique se você configurou o arquivo `.env` adequadamente.
  - Certifique-se de que o **backend** está executando.
  - Execute `expo start`.
