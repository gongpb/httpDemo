var util = require("util");
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');
var post_data = require('./data/post_data.json');
console.log(post_data);


//{
//    "id": 1,
//    "data": {
//        "username": "admin",
//        "password": "adminPwd",
//        "location": "北京市海淀区知春路"
//    }
//}
var run = function(req, res){
	//post方式取值
	var post = '';
	req.on('data', function(chunk) {
		post += chunk;
//		console.log(" post:"+post);
	});
	req.on('end', function() {
		post = querystring.parse(post);
		console.log(post.dataJson);
//		var data = JSON.parse(post.dataJson);
		var json = post.dataJson;
		if( json instanceof Object){
			console.log(111111);
		} else{
			console.log(222222);
		}
		var JO = JSON.parse(json);
		console.log(JO.id);
		console.log(JO.data);
//		console.log(post.dataJson.data);
		res.end("提交成功");
	});
	
	//通过get方式取值
//	console.log( util.inspect(url.parse(req.url, true)) );
//	res.writeHead(200, {'Content-Type': 'text/plain'});
//	res.end(util.inspect(url.parse(req.url, true)));
};

exports.run = run;