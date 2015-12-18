var fs = require('fs')
var zlib = require('zlib')

fs.createReadStream('output.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('output'))


console.log('decompression is over')
