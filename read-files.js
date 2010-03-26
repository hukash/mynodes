var fs = require('fs'), 
    sys = require('sys');
fs.readdir(".").addCallback(function (files) { 
    var count = files.length,
        results = {};
    files.forEach(function (filename){
        File.read(filename).addCallback(function (data){
            results[filename] = data;
            count--;
            if(count <= 0) {
            
            }
        });
    });
});
