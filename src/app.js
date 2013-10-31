var http = require('http');
var fs = require('fs');
var cluster = require('cluster');
var cpus = require('os').cpus().length;
var config = require('../setting/config.json');
var querystring = require('querystring');
var url = require('url');
var connect = require('connect');
var processes = {};
app = connect();

//if(cluster.isMaster){
//	for(var i=0;i<cpus;i++){
//		var worker = cluster.fork();
//		console.log("cluster fork");
//	}
//	console.log("cluster fork-----------");
//	console.log(22222222);
//}else{

processes[404]=require('./modules/http_status').httpStatus404;
var routes = config.manager.routers;
for(path in routes){
	var processName = routes[path];
	processes[path] = require("./modules/"+processName);
};
console.log(processes);

//通过 connect createServer
//var dispatch = function(req, res){
//	var pathname = url.parse(req.url).pathname;
//	processes[pathname].run(req, res);
//};
//
//app.use(connect.cookieParser());
//app.use(connect.query());
//app.use(connect.bodyParser());
//app.use(dispatch);
//http.createServer(app).listen(80);


var server = http.createServer(function (req, res) {
	var pathname = url.parse(req.url).pathname;
	processes[pathname].run(req, res);
	
}).listen(80);
console.log('Server running at http://localhost:80/');
	
//}
	

