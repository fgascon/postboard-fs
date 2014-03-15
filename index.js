var postboard = require('postboard');
var mkdirp = require('mkdirp');
var fs = require('fs');
var path = require('path');

module.exports = function(containerPath){
	
	function resolvePath(key, callback){
		var filePath = path.join(containerPath, key);
		if (filePath !== path.normalize(filePath)){
			throw "Invalid path";
		}
		return filePath;
	}
	
	return postboard({
		get: function(key, callback){
			var filePath = resolvePath(key);
			fs.exists(filePath, function(exists){
				if (exists) {
					fs.readFile(filePath, {encoding: 'utf8'}, callback);
				} else {
					callback();
				}
			});
		},
		set: function(key, value, callback){
			var filePath = resolvePath(key);
			mkdirp(path.dirname(filePath), function(err){
				if (err) {
					callback(err);
				} else {
					fs.writeFile(filePath, value, callback);
				}
			});
		},
		'delete': function(key, callback){
			var filePath = resolvePath(key);
			fs.exists(filePath, function(exists){
				if (exists) {
					fs.unlink(filePath, callback);
				} else {
					callback();
				}
			});
		}
	});
};
