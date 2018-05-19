const http = require('http')

const Server = http.createServer((req,res)=>{
    res.end('welcome to HTTP/Nodejs')
})

Server.listen(3300)

console.log('servidor conectado < http://localhost:3300 >')