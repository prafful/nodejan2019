var http = require('http')
var fs = require('fs')

http.createServer(function(rq, rs){
    rs.writeHead(200, {'Content-Type':'text/html'})
    rs.write("<h1>Working with fs module</h1>")

    fs.readFile('banner.jpg', function(err, data){
        if(err){
            throw err
            rs.end()
        }
        rs.write("<br>")
        console.log(data)
        //rs.write(data)

        //fs.mkdir(__dirname+"/images")

        //fs.writeFile('images/encoded.jpg', data, function(err){})

        //var b64 = data.toString('base64')
        //var decodedImage = new Buffer(b64, 'base64')
        
        //fs.writeFile('images/decoded.jpg', decodedImage, function(err){})         

        rs.write('<html><body><img src="data:image/jpeg;base64,')
        rs.write(Buffer.from(data).toString('base64'))
        rs.end('"/></body></html>')
    })

   

   
}).listen(88)