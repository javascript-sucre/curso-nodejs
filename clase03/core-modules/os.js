const os = require('os')

os.cpus().forEach((element)=>{
    console.log(element)
})

console.log(`arch: ${os.arch()} , platform: ${os.platform()}`)