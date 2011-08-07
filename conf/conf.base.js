var crypto = require('crypto');
var authB = new Buffer('uname:pass');
var auth = "Basic " + authB.toString('base64');


var conf = {
	db: {host: '127.0.0.1', port: '8090', headers: {Authorization: auth}}
	//stuff for configuration here
}