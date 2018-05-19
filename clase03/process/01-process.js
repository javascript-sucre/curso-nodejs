
console.log(process.argv)
console.log('-----------------------')
var name = process.argv[0]
var name = process.argv[1]
var name = process.argv[2]
console.log(name)
console.log(`arch: ${process.arch}`)
console.log(`arch: ${process.cwd()}`)
console.log(`arch: ${JSON.stringify(process.env)}`)
console.log(`arch: ${JSON.stringify(process.cpuUsage())}`)
//process.abort()