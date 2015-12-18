var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var multer = require('multer')
var fs = require('fs')

var urlencodedParser = bodyParser.urlencoded({extended:false})

app.use(express.static('/Users/pengkun/Downloads'))
app.use(multer({dest:'/tmp/'}).array('image'))

app.get('/',function (req,res) {
	console.log('main page get ')
	res.send('Hello Get')
	})

app.post('/',function (req,res){
	console.log('main page Post')
	res.send('Hello Post')

	})

app.delete('/del_user', function (req,res){
		console.log('/del_user response to DELETE operation')
		res.send('delete desired web page')
	})

app.get('/list_user',function (req,res){
		console.log('/list_user GET 请求')
		res.send('request for list_user')
	})

app.get('/ab*cd',function (req,res){
		console.log('/ab*cd GET qingqiu')
		res.send('regex expression request')
	})

app.get('/process_get', function (req,res){
	if(req.query.first_name){
		response = {
			first_name:req.query.first_name,
			last_name:req.query.last_name
			}
		res.end(JSON.stringify(response))
		}
	else{
		 res.sendFile(__dirname + '/process_get.html')
		}
	})

app.get('/process_post', function (req,res){
		res.sendFile(__dirname+'/process_post.html')
	})

app.post('/process_post', urlencodedParser,function (req,res){
		response = {
				first_name:req.body.first_name,
				last_name:req.body.last_name
			}
		res.end(JSON.stringify(response))
	})

app.get('/file_upload', function (req,res){
		res.sendFile(__dirname+'/file_upload.html')
	})

app.post('/file_upload', function (req,res){
		var des_file = __dirname + '/'+ req.files[0].originalname	
		fs.readFile( req.files[0].path,function (err,data){
				fs.writeFile(des_file,data,function (err){
						if(err)
							console.log(err)
						else{			
							response = {
								message:'file uploadeed',
								filename:req.files[0].originalname}		}
							})
					})
	        res.end(JSON.stringify(response))

	

	})

var server = app.listen(8888,function (req,res){
			var host = server.address().address
			var port = server.address().port
			console.log('e222222')
		})



