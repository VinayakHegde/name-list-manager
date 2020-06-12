# name-list-manager

A basic React app using Typescript.

The app allows the user to add and remove names to and from a list. 
There is a button to randomly pick a name from the list, however the same name not picked twice in a row. 
The picked name displayed in an easy to read way for the user.

![](demo.gif)

It fit the following criteria:
* Compiles without errors
* Includes redux as state management
* Compiled code runs on Internet Explorer 11+
* Tooling: Webpack
* Unit testing: jest

Please, Create teact app (CRA) CLI is not used to bootstap the app.

# cloning the repo
```
git clone https://github.com/VinayakHegde/name-list-manager.git
```

# install (using yarn - however feel free to use npm)
```
yarn install
```
# scripts

## unit test
```
yarn test
```

## run app (used webpack-dev-server)
```
yarn start
```
App opens in a browser with http://localhost:8080/
Make sure you are not using port 8080 when starting the app

## prettify (formatting)
```
yarn format
```

### lints
```
yarn lint
```

## build 
```
yarn build
```
