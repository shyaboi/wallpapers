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
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

// app.get('/', (req, res) => {
//   res.redirect('http://localhost:'+homePORT)
// })

app.get('/upload', (req, res) => {
 res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
  return res.end();
})

app.get('/donus', (req,res) =>{
  res.send('bigoofs')
});

app.listen(exPORT)
console.log("Server Started on " + exPORT)

try {
  const arrayOfFiles = fs.readdirSync("../FileServer/img")
} catch(e) {
}



let counter = 0
app.post("/fileupload", function (req, res) {
    // date stamp var
    var date = new Date(Date.now())
      //  console.log(req);
      
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      counter++
      var oldpath = files.filetoupload.path;
      console.log(oldpath);
      var newpath = "../FileServer/img/"+'Walls' + counter + files.filetoupload.name;
      // console.log(newpath);
      fs.rename(oldpath, newpath, function (err) {
        path.dirname("FileServer/img/")
        if (err) throw err;
        var newSlice = newpath.slice(2);
        console.log(newSlice)
        res.write(`<h1><a href="https://dinguswallpapermassiv.herokuapp.com/">home</a></h1>` + '<h2>Your wallpaper has been uploaded, it will show up on the <a href="https://dinguswallpapermassiv.herokuapp.com/">homepage</a> in yonks mate!</h2>');

        // `<img src="http://localhost:4000/static/media${newPa}">ok</img>`
        res.end();
      });
    });
    
    
  } else {
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(PORT);




console.log("Server Started on " + PORT);
