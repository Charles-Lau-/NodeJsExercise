var fs = require('fs')
var data = 'this is just demo ! attention!'

var writeStream = fs.createWriteStream('output')

writeStream.write(data,'UTF8')

writeStream.end()

writeStream.on('finish',function () { console.log('writing process is over')})

writeStream.on('error',function (err){ console.log('error occurs'+err)})

console.log('app is over')
