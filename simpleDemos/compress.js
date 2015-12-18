var fs = require('fs')
var zip  = require('zlib')

fs.createReadStream('input')
  .pipe(zip.createGzip()).pipe(fs.createWriteStream('output.gz'))


console.log('compression has complished')
