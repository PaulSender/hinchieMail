var express = require('express');
var app = express();
var path = require('path');
// set port 
var port = process.env.PORT || 8080
app.use(express.static(__dirname));

//routes
app.get("/", function(req, res){
	res.sendFile(path.resolve("home.html"))
})

app.listen(port, function(){
	console.log("App running " + port);
})