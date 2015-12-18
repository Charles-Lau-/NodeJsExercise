var fs = require('fs')

var readStream = fs.createReadStream('input')

var writeStream = fs.createWriteStream('output')

readStream.pipe(writeStream)

console.log('applicaiton is over')
