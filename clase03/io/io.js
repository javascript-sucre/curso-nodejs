var console = require('./console');

console.log('introduce values :');

process.stdin.on('data', function (data) {
    console.log('in:'+data.toString('utf-8'));
});