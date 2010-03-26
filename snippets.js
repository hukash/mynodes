var sys = require('sys'), fs = require('fs');

fs.readdir(".", function (err, files) { 
    if (err) throw err;
    var count = files.length,
        results = {};
    sys.puts("files: " + files);
   /* files.forEach(function (filename){
        this.read(filename, function (err, data) {
            if (err) throw err;
            results[filename] = data;
            count--;
            if(count <= 0) {
                response.write("Count: " + count);            
            }
        });
    
    });
    */
});
