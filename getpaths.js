var sys = require('sys'),
    fs = require('fs');
var counter = 0, fileCounter = 0;

var GetFiles = {
   
  traverse:function(file) {
    
    fs.stat(file, function(err, stats) {
      if (err) sys.debug("File Status: " + err);
      
      if (stats.isDirectory()) {
        fs.readdir(file, function(err, files) {
          if (err) sys.debug("Read dir: " + err);
          
          files.forEach(function(filename) {
            GetFiles.traverse(filename);
          })
        })
      } 
      else if (stats.isFile()) {
        sys.puts(file)
      }
      else sys.puts("unknown")
    });
  },
};

GetFiles.traverse("/Users/lukas/Downloads");

function traverse(file) {
  fs.stat(file, function(err, stats) {
    if(err) throw err;
    
    if(stats.isDirectory()) {
      fs.readdir(file, function(err, files) {
        if(err) throw err;
        sys.debug("directory: " + file);
        
        files.forEach(function(foundFile) {
          traverse(foundFile);
          counter++;
        });
      });
    } 
    else if(stats.isFile()) {
      fileCounter++;
      sys.puts(file)
    }
  })
}
traverse("/Users/lukas/Downloads");
sys.puts("Found directories and files: " + counter);
sys.puts("Found files: " + fileCounter);

var listFiles = {
  
  traverseDir:function(file) {
    fs.stat(file, function(err, stats) {
      if (err) sys.debug("Error: " + file);
  
      fs.readdir(file, function(err, files) {
        if (err) throw err;
        
        files.forEach(function(filename) {
          listFiles.traverseDir(filename)
        })
      })
    })
  },
};

//(listFiles.traverseDir("/Users/lukas/Desktop/test");