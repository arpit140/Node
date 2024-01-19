const http = require('http')


const server = http.createServer((req,res) => {

    res.end("My name is Arpit kumar singh")

})


server.listen(100)