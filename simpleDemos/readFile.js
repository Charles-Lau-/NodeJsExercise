var fs = require('fs')
var readStream = fs.createReadStream('input')
var data = ''

readStream.setEncoding('UTF8')

readStream.on('data',function (chunk) {data+=chunk})
readStream.on('end',function () { console.log(data)})
readStream.on('error',function (err){console.log(err)})

console.log('over')
