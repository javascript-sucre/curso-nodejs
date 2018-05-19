const events = require('events');

const emitter = new events.EventEmitter();

emitter.on('mievento',function(){
    console.log('emitiendo evento')
});

emitter.emit('mievento');