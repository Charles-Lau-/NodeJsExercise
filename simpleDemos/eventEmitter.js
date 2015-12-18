var events  = require('events')
var eventEmitter = new events.EventEmitter()
var eventHandler2 = function (){console.log('first')}
eventEmitter.on('eventB',eventHandler2)
var eventHandler = function (){
     var t = 100000000000
     eventEmitter.emit('eventB')
     console.log('second')
     
}
eventEmitter.on('eventA',eventHandler)
eventEmitter.emit('eventA')
console.log('over')
