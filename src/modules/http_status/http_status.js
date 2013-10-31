
var httpStatus404 = {
	run : function(req, res) {
		res.writeHead(404, "Not Found", {'Content-Type' : 'text/html'});
		res.end("404 Not Found");
	}
};

exports.httpStatus404 = httpStatus404;
