var sys = require("sys"),
    fs  = require("fs");

var myReader = {
  
  allDirectories:null,
  directory:null,
  
  Constructor: function(directory) {
    this.allDirectories = [];
    this.directory = directory;
    this.getFiles(this.directory);
  },
  
  getFiles: function(directory) {
    var getDirectories = [];      
    sys.puts("gd " + getDirectories.length);
    sys.puts("ad " + this.allDirectories.length);
    
    fs.stat(directory, function(err, stats) {
      
      if(err) sys.debug(err);
      
      if(stats.isDirectory()) {
        
        fs.readdir(directory, function(err, files) {
          if(err) sys.debug(err);
          getDirectories = files;
          sys.puts("gd " + getDirectories.length);
          this.allDirectories = getDirectories;
          
          return this.allDirectories;
        });
      }
    });
  },
  
  showResults: function(results) {
    sys.puts("Found files: " + results);
  },
  
};

var mr = myReader.Constructor("/Users/lukas/Downloads");

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
            //sys.puts(filename);
            allDirectories.push(filename);
          })
          sys.puts(allDirectories)
        });
      } 
      else {
        sys.puts("File");
      }
      //sys.puts(allDirectories);
    });
  },
  
};

//var myfiles = FileReader.getFiles("/Users/lukas/Downloads");
