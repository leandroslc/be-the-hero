
<h2 align="center" style="margin: 0; font-style: italic;">
  <em>
    <small style="font-size: .7em;">Be the</small>
    <span style="color: #dd1e3b;">Hero</span>
  </em>
</h2>

<p align="center" style="margin: 0;">
  Uma aplicação completa para Organizações Não Governamentais (ONGs)
  <br />
  baseado na <strong>Semana Omnistack <code>11.0</code></strong> da <a href="https://rocketseat.com.br">Rocketseat</a>.
</p>

## Propósito
Este repositório foi construído para praticar o desenvolvimento do backend _(com express)_, frontend _(com React)_, e mobile _(com React-Native)_, durante a Semana Omnistack 11.0.

## Com algumas diferenças
- Todos os projetos foram desenvolvidos em [Typescript](https://www.typescriptlang.org/).
- Os estilos da aplicação web foram desenvolvidos usando [Sass](https://sass-lang.com/).
- O design da aplicação web é responsivo, usando uma abordagem [Generic First](https://www.smashingmagazine.com/2018/12/generic-css-mobile-first/).
- O tema da aplicação web pode ser personalizado usando variáveis.

## Requisitos
Você vai precisar do [nodejs](https://nodejs.org/) instalado e do [yarn](https://yarnpkg.com/getting-started).

Para o aplicativo **mobile**:
- Instale o Expo CLI usando o comando `npm install -g expo-cli`.
- Configure um dispositivo físico ou um emulador com um sistema iOS ou Android unsado o [Expo](https://docs.expo.io/versions/v36.0.0/get-started/installation/).
- Você precisa adicionar o seu endereço de IP em um arquivo `mobile/.env`, como abaixo:
  ```
  IP=192.168.0.1
  ```

## Como executar
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
