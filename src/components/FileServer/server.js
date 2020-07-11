var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var path = require('path');
var express = require('express')
var app = express()
var PORT = process.env.port || 4000;
const homePORT = process.env.PORT || 3000
const exPORT = process.env.PORT || 8080


app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res) => {
  return res.send('pong')
})

app.listen(exPORT)
console.log("Server Started on " + exPORT)

try {
  const arrayOfFiles = fs.readdirSync("../FileServer/img")
} catch(e) {
}



let counter = 0
http.createServer(function (req, res) {
 
}).listen(PORT);




console.log("Server Started on " + PORT);
