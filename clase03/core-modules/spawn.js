const cp =require('child_process');
const progs = {
    list:'ls',
    copy:'cp',
    folder:'mkdir'
}

const child = cp.spawn(progs.list,['-l']);

child.stdout.on('data',(data)=>{
    const information = data.toString().split('\n').slice().join('\n\n');
    console.log(`by~aw45 : ${information}` );
});

const child2 = cp.spawn(progs.copy,['./console.js','./console-copy.js']);
child2.stdout.on('readable',(data)=>{
    console.log('adadsa',data);
})