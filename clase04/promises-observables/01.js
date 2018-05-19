var promise = new Promise(function (resolve,reject){
    //write code
    resolve({name:'valores devueltos'})
    reject('rechazado...')
}).then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log(error)
})