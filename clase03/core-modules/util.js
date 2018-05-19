const util = require('util')
class Console{
    log(sms){
        util.puts(sms)
    }
}

var console = new Console()
console.log('print .............')