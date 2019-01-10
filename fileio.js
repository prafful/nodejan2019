var http = require('http')
var fs = require('fs')

http.createServer(function(rq, rs){
    rs.writeHead(200, {'Content-Type':'text/html'})
    rs.write("<h1>Working with fs module</h1>")

    fs.readFile('hello.txt', function(err, data){
        if(err){
            throw err
            rs.end()
        }
        rs.write("<br>")
        console.log(data)
        rs.write(data)

        fs.writeFile('hello1.txt', data, function(err){
            console.log(err)
        })

        rs.end()
    })

   

   
}).listen(88)