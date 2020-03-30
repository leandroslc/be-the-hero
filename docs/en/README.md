
<h2 align="center" style="margin: 0; font-style: italic;">
  <em>
    <small style="font-size: .7em;">Be the</small>
    <span style="color: #dd1e3b;">Hero</span>
  </em>
</h2>

<p align="center" style="margin: 0;">
  A complete application for Non Governamental Organizations (NGOs)
  <br />
  based on <strong>Semana Omnistack <code>11.0</code></strong> taught by <a href="https://rocketseat.com.br">Rocketseat</a>.
</p>


## Purpose
This repository was built to practive development of backend _(with express)_, frontend _(with React)_ and mobile _(with React-Native)_, during the Semana Omnistack 11.0.

## With some differences
- All projects were build using [Typescript](https://www.typescriptlang.org/).
- All styles of the web application were implemented using [Sass](https://sass-lang.com/).
- The web application design is responsive, using a [Generic First](https://www.smashingmagazine.com/2018/12/generic-css-mobile-first/) approach.
- The web application theme can be customized using css variables.

## Requirements
You will need [nodejs](https://nodejs.org/) installed and [yarn](https://yarnpkg.com/getting-started).

For the **mobile** app:
- Install the Expo CLI using the command `npm install -g expo-cli`.
- Configure a physical device or an emulator with either an iOS or Android system using the [Expo](https://docs.expo.io/versions/v36.0.0/get-started/installation/).
- You need to add your IP address within a file `mobile/.env`, as follows:
  ```
  IP=192.168.0.1
  ```

## How to run
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
