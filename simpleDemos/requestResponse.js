var http = require('http')
var url = require('url')
var util = require('util')
var querystring = require('querystring')


http.createServer(function (req,res){
	res.writeHead(200,{'Content-Type':'text/plain'})
	res.end(util.inspect(url.parse(req.url,true)))
}).listen(8888)



