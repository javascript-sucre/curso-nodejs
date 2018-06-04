// importando las librerias que serán utilizadas (las librerias estan incluidas dentro de nodejs)
const http = require('http');
// creando el servidor que atienda las peticiones (request) y responda de acuerdo a lo solicitado (response) que escuche en el puerto 8000
http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // escribiendo el contenido de la respuesta
    res.end(JSON.stringify({ platform: require('os').platform() }));
}).listen(8000, () => { console.log('running...') });