# CLASE04
<br>
Abrir la terminal con <strong>CTRL+ALT+T</strong>

```sh
# ubicarse en el directorio del curso NODEJS
$ cd ./curso-nodejs

# crear el directorio de la clase04
$ mkdir ./clase04
```

## RXJS

repositorio github [rxjs](https://github.com/Reactive-Extensions/RxJS)

## EXPRESJS
página oficial de [express](http://expressjs.com)

```sh
# establecer directorio como un modulo
$ npm init -y

# instalar express en nuestro proyecto como dependencia
$ npm i -S express
```

## WEBPACK
página oficial de [webpack](https://webpack.js.org/)

```sh
# establecer directorio como un modulo
$ npm init -y

# instalar webpack
$ npm install webpack webpack-cli --save-dev

# crear archivo webpack.config.js
$ touch webpack.config.js
```
```js
//crear script en el archivo package.json llamado "build" que ejecute webpack
"scripts": {
    "build": "webpack"
}
```