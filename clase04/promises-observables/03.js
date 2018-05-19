let rxjs = require('rxjs');

let flujo = rxjs.Observable.of(['hello'],['from rxjs'],[true],['false']);

flujo.skip(1).take(1).map(data=>{data.forEach(item=>console.log('--'+item)); return data}).subscribe(observer => {
    console.log('Resultados=> ' + observer)
});