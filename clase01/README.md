# CLASE01
<br>

Abrir la terminal con <strong>CTRL+ALT+T</strong>

```sh
# ubicarse en el directorio del curso NODEJS
$ cd ./curso-nodejs

# crear el directorio de la clase01
$ mkdir ./clase01

#--------------------------------
# instalar VIM
$ apt-get update
$ apt-get install vim

#--------------------------------
# crear directorio .vscode
$ mkdir ./vscode

# crear archivo launch.json
$ vim launch.json
```

## BABEL

página oficial de [babel](https://babeljs.io)

```sh
# crear archivo package.json
$ npm init -y

# instalar
$ npm install --save-dev babel-cli babel-preset-env

# instalando presets es2015
$ npm install babel-preset-es2015

# crear un archivo <striong>.babelrc</strong>
$ touch .babelrc

# crear archivo usando VIM
$ vim ./clase01/babel/main.js

# compilar el archivo main.js con babel
$ npx babel ./clase01/babel/main.js

```

## TYPESCRIPT
página oficial de [typescript](https://www.typescriptlang.org)

``` sh
# instalar typescript
$ npm install typescript --save-dev

# inicializar un proyecto typescript
$ tsc --init

# abrir el código en visual studio code
$ code .

# visualizar el contenido del archivo tsconfig.json
$ cat ./tsconfig.json

# crear el archivo math2.ts usando VIM
$ vim math2.ts
```

## ES6
caracteristicas de [es6](http://es6-features.org)
let , const , arrows funtions, template string ...
``` sh
# instalar tslint globalmente
$ npm install tslint -g

# instalar eslint globalmente
$ npm install eslint -g
```