Não sabe falar inglês? Leia a [versão em português](docs/pt-br/README.md).

<h1 align="center">
  <em>Be The</em> Hero
</h1>

<p align="center">
  An application to help manage and solve incidents for Non Governamental Organizations Based on <strong>Semana Omnistack <code>11.0</code></strong> taught by <a href="https://rocketseat.com.br">Rocketseat</a>.
</p>

<div align="center">
  <img align="center" src="./docs/home.png" alt="Web app homepage" width="70%" />
</div>

## :book: Purpose
This repository was built to practive development of a backend API _with Node express_, a frontend app _with React_, and a mobile app _with React-Native_.

## :sparkles: Additional Features
- All projects were build using [Typescript](https://www.typescriptlang.org/).
- All styles of the web application were implemented using [Sass](https://sass-lang.com/).
- The web application design is responsive, using a [Generic First](https://www.smashingmagazine.com/2018/12/generic-css-mobile-first/) approach.
- The web application theme can be customized using css variables.

## :gear: Requirements
You will need [nodejs](https://nodejs.org/) installed and [yarn](https://yarnpkg.com/getting-started).

For the **mobile** app:
- Install the Expo CLI using the command `npm install -g expo-cli`.
- Configure a physical device or an emulator with either an iOS or Android system using the [Expo](https://docs.expo.io/versions/v36.0.0/get-started/installation/).
- You need to add your IP address within a file `mobile/.env`, as follows:
  ```
  IP=192.168.0.1
  ```

## :rocket: How to run
> Ensure you are running the commands in their corresponding directories.

- **backend**:
  - Install dependencies with `npm install`.
  - Run database migrations (dev): `npx knex migrate:latest`.
  - An start the server with `npm start`.

- **frontend**:
  - Install dependencies with `yarn`.
  - Ensure the **backend** is running.
  - And start the application using `npm start`.

- **mobile**:
  - Install dependencies using the command `expo install`.
  - Verify if you have set the `.env` file appropriately.
  - Ensure the **backend** is running.
  - Run `expo start`.
