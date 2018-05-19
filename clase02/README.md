# CLASE02
<br>

Abrir la terminal con <strong>CTRL+ALT+T</strong>

```sh
# ubicarse en el directorio del curso NODEJS
$ cd ./curso-nodejs

# crear el directorio de la clase02
$ mkdir ./clase02
```
## NPM 
página oficial de [nodejs](https://nodejs.org)
```sh
# instalar nodejs y npm
$ apt-get update
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
$ apt-get install nodejs
$ apt-get install npm

# version de nodejs
$ node --version

# versión de npm
$ npm --version

# iniciar un proyecto como modulo (package) para npm con los valores por defecto
$ npm --init -y

# instalar una dependencia
# npm install <package_name>
$ npm install typescript
$ npm install eslint
$ npm install bootstrap
$ npm install express
$ npm install mysql
$ npm install jsonwebtoken
$ #...
$ #...

```