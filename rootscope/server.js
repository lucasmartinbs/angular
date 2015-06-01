var express = require('express'),
 app = express();

 app.use(express.static(__dirname+'/xampp'))
 .get('*', function(req, res){
 res.sendFile('/index.html', {root:__dirname});
 }).listen(3000);
