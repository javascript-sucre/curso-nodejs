"use strict";

var body2 = [] || new Array();

var Server2 = require('http').createServer((req, res) => {
    res.writeHead(200, 'describiendo la razon ...', { 'Content-Type': 'text/plain' });
    res.writeHead(200, { 'Access-Control-Allow-Origin': '*' });
    var fruits = [
        'manzana',
        'pera',
        'mango'
    ];
    res.write(`<h1>HELLO....</h1>`);
    res.end(JSON.stringify(fruits));
}).on('request', (request, response) => {
    const { headers, method, url } = request;
    console.log(method, url, headers['user-agent']);
    request.on('data', (chunk) => {
        body2.push(chunk);
    }).on('end', () => {
        body2 = Buffer.concat(body2).toString();
        console.log('body2 chunks' + body2);
    }).on('error', (err) => {
        console.log('ERROR OWN REQUEST', err.stack);
    })
})

Server2.listen(3100, 'localhost', () => {
        console.log('NODEJS SERVER RUNNING...');
    })