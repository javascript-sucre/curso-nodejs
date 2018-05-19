var crypto = require('crypto')
const alg = 'aes-256-ctr'
const pwd = 'abcd'

const cipher = crypto.createCipher(alg, pwd)
const value = cipher.update('entrada', 'utf-8', 'hex')

console.log(value)

const decipher = crypto.createDecipher(alg, pwd)
const plain = decipher.update(value, 'hex', 'utf-8')
console.log(plain) 