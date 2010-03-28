var sys = require("sys"),
    fs  = require("fs");

var FileReader = {
  
  allDirectories: null,
  
  getFiles: function (directory) {
    
    allDirectories = [];
    fs.stat (directory, function (err, stats) {
      if (err) sys.debug (err);

      if (stats.isDirectory()) {
        fs.readdir (directory, function (err, files) {
          if (err) sys.debug (err);
          
          files.forEach(function (filename){
            sys.puts(filename);
            allDirectories.push(filename);
          })
          
        });
      } 
      else {
        sys.puts("File");
      }
    });
  },
  
};

var myfiles = FileReader.getFiles("/Users/lukas/Downloads");
