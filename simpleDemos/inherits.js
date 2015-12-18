var util = require('util')

function Base(){
		this.name = 'base'
		this.base = 1991
		this.sayHello = function (){console.log('Hello '+this.name)}



	}

Base.prototype.shwoName = function (){ 
		console.log(this.name)
       }


function Sub(){
	this.name = 'sub'
}
util.inherits(Sub,Base)
var base = new Base()
var sub = new Sub()

console.log(util.inspect(sub))
console.log(util.inspect(sub,true,2,true))
