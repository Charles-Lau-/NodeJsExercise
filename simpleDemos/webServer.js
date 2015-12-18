var http = require('http')
var url = require('url')
var fs = require('fs')

http.createServer(function (req,res){
	var pathname = url.parse(req.url).pathname
	console.log('requested file is :' + pathname.substr(1))
	fs.readFile(pathname.substr(1),function (err,data){
		if(err){
			console.log('error occurs')
			res.writeHead(404,{'Content-Type':'text/html'})
			}
		else{
			res.writeHead(200,{'Content-Type':'text/html'})
			res.write(data.toString())
			console.log('valid access')
		}
		res.end()
		})

	}).listen(8888)
