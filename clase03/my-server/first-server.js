"use strict";

// crear servidor que devuelva una lista de frutas al acceder a http://localhost:3100 

const ServerA = require('http').createServer((req, res) => {
    res.writeHead(200, 'describiendo la razon ...', { 'Content-Type': 'text/plain' });
    res.writeHead(200,{'Access-Control-Allow-Origin':'*'});
    var fruits = [
        'manzana',
        'pera',
        'mango',
        'naranja',
        'piña'
    ];
    res.end(JSON.stringify(fruits));
})

ServerA.listen(3100, () => {
    console.log('NODEJS SERVER RUNNING...');
})