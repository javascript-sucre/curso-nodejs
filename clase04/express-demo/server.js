const express = require('express')
const app = express()

app.use(express.static(__dirname+'/public'))

app.get('/', (req, res) => {
    res.send('<h1>PERSONS</h1>')
})

app.get('/persons', (req, res) => {
    res.send('all persons ......')
})

app.post('/persons', (req, res) => {
    res.send('insert one person')
})

app.put('/persons', (req, res) => {
    res.send('update data person')
})

app.delete('/persons', (req, res) => {
    res.send('remove data person')
})

var port = 5000;

app.listen(port, 'localhost', () => {
    console.log(`api run ${port}`)
}) 