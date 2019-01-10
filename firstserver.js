var httpVariable = require('http')

var customlib = require('./library/datelib')

var server = httpVariable.createServer(dotItNow)

function dotItNow(myrequest, myresponse){
    myresponse.writeHead(200, {'Content-Type':'text/html'})
    myresponse.write("<h1>Hello from Node</h1>")
    myresponse.write(customlib.datelibrary() + "<br>")
    myresponse.write(customlib.stringlibrary())
    myresponse.end()
}

server.listen(8888)