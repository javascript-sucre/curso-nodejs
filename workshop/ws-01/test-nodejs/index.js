// importando las librerias que serán utilizadas 
// (las librerias estan incluidas dentro de nodejs)
var http = require('http')
var fs = require('fs')

// leyendo archivo "index.html"
fs.readFile('./index.html', function (error, data) {
    // si ocurre un error durante la lectura del archivo lanzar un excepción.
    if (error) throw error
    // creando el servidor que atienda las peticiones (request) y responda de acuerdo a lo solicitado (response)
    var Server = http.createServer(function (request, response) {
        // escribiendo el contenido de la respuesta
        response.end(data)
    })

    // indicando que nuestro "servidor" escuche en el puerto 8000
    Server.listen(8000, function () {
        // mostrando "log" cuando arranque el servidor
        console.log('app running...')
    })
})