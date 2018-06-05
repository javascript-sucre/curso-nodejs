require('express')().get('/',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.status(200).send(require('os').platform());
}).listen(8000,()=>console.log('running...'));