var sys = require('sys'),
	fs = require('fs');

var FileReader = {

	directory: null,
	result: null,
	tempDir:null,

	start: function (directory) {
		this.directory = directory;

		this.tempDir = this.checkDirectory (this.directory);
		this.result = this.readDirectory (this.directory);
		
		sys.puts("Directory: " + this.tempDir);
		sys.puts("Result: " + this.result);
	},

	checkDirectory: function(directory) {

		fs.stat(directory, function (err, stats) {
			if (err) throw err;

			if (stats.isDirectory()) {
				return directory;
			} else {
				return false;
			}
		});
	},

	readDirectory: function (directory) {
		fs.readdir(directory, function (err, files) {
			if (err) throw err;
			return files;
		});
	},

};

FileReader.start("/Users");
