var sys = require('sys'),
    http = require('http'),
    fs = require('fs');

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.body("Hello World\n");
    
    response.close();
}).listen(8000);

sys.puts("Server running at http://127.0.0.1:8000/");

fs.realpath(".", function(err, resolvedPath) {
        if (err) throw err;
        sys.puts("Path: " + resolvedPath)
    });

// NOTE: readdir macht keinen rekursiven Aufruf,
// TODO: rekursive 
fs.readdir(".", function(err, files) {
    if (err) throw err;
    var count = files.length,
        results = {};
    files.forEach(function(filename) {
        sys.puts(filename),
        
        fs.realpath(filename, function(err, resolvedPath) {
            if (err) throw err;
            sys.puts("Path: " + resolvedPath)
        });
        
        fs.stat(filename, function(err, stats) {
            if (stats.isDirectory()) {
                fs.readdir(filename, function(err, files) {
                    if (err) throw err;
                    files.forEach(function(filename) {
                    count++;
                    sys.puts(filename)
                    })
                })
           } else sys.puts("No directory"); 
        });
    });
    //Timer.start();
    sys.puts("Found " + count + " files:");
});

var Timer = {
    start:function() {
        this.setupTimer();
    },
    setupTimer:function() {
        //var date = new Date();
        setInterval(this.tick, 1000);
    },
    tick:function() {
        // NOTE: Called externally
        Timer.tock()
    },
    tock:function() {
        var date = new Date();
        sys.puts("The Timer is ticking: " + date)
    },
};
