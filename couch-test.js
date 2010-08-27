var sys = require('sys');

var couchdb = require('./lib/node-couchdb/lib/couchdb'),
    client = couchdb.createClient(5984, '127.0.0.1'),
    db = client.db('mytest');

// Check if DB exists
db.exists(function (err, exists) {
  if (!exists) {
    sys.puts("There's no DB, so I create one");
    db.create();
  } 
  else {
    sys.puts("Successfully connected to DB");
  }
});

// Creating a document
db.saveDoc('my-doc', {awesome: 'couch and node fun' }, function(err, ok) {
  if (err) throw new Error(JSON.stringify(err));
  sys.puts('Saved my first doc to the couch');
});

// Getting document
db.getDoc('my-doc', function(err, doc) {
  if (err) throw new Error(JSON.stringify(err));
  sys.puts("Fetched my first doc from couch:");
  sys.puts(JSON.stringify(doc));
  //console.log(doc);
});
