var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var path = require('path');
var PORT = process.env.port || 4000;





try {
  const arrayOfFiles = fs.readdirSync("../FileServer/img")
  console.log(arrayOfFiles)
} catch(e) {
  console.log(e)
}


http.createServer(function (req, res) {
    // date stamp
    var date = new Date(Date.now())
       console.log(date);
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
       
      var oldpath = files.filetoupload.path;
      console.log(oldpath);
      var newpath = "../FileServer/img/"+ date + 'Walls' + files.filetoupload.name;
      console.log(newpath);
      fs.rename(oldpath, newpath, function (err) {
        path.dirname("FileServer/img/")
        if (err) throw err;
        res.write('File uploaded!' + '<a href=newpath>link</a>');
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
