// importando las librerias que serán utilizadas  (las librerias estan incluidas dentro de nodejs)
var http = require('http')
var fs = require('fs')

// creando el servidor que atienda las peticiones (request) y responda de acuerdo a lo solicitado (response)
var Server = http.createServer(function (request, response) {

    // permitir diferentes fuentes
    response.setHeader('Access-Control-Allow-Origin', '*')

    //verificando URL
    switch (request.url) {
        case '/anotation.txt':
            // leyendo archivo "anotations.txt"
            var data = fs.readFileSync(request.url.slice(1));
            //escribiendo que interprete el contenido como un texto TXT
            response.setHeader('Content-Type', 'text/plain')
            //escribiendo información // texto
            response.write(data);
            break;
        case '/picture.png':
            // leyendo archivo "picture.png"
            data = fs.readFileSync(request.url.replace('/',''));
            //escribiendo que interprete el contenido como una imganen PNG
            response.setHeader('Content-Type', 'image/png')
            //escribiendo información // imagen
            response.write(data); 
            break;
        default: response.write('archivos no permitidos...')
    }

    response.end();

})

// indicando que nuestro "servidor" escuche en el puerto 8000
Server.listen(8000, function () {
    // mostrando "log" cuando arranque el servidor
    console.log('app running...')
})