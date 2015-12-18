function route(req){
	if(req.indexOf('favicon') >= 0 )
		; 
	else
		console.log('The req is '+req)
}

exports.route = route
