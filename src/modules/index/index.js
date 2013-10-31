var fs = require('fs');
exports.run = function(req, res){
	  var html = fs.readFileSync('../views/index.html').toString(); 
	  res.writeHead(200, {'Content-Type': 'text/html'}); //text/plain
	  res.write(html);
	  res.end();
};
