/***
  * mongodb connect test
  **/

// var MongoClient = require('mongodb').MongoClient
//   , assert = require('assert');
//
// // Connection URL
// var url = 'mongodb://myMongoDB:27017/myproject';
//
// // Use connect method to connect to the server
// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
//
//   db.close();
// });


var assert = require('assert');
var fs = require('fs');
var mongodb = require('mongodb');

var uri = 'mongodb://localhost:27017/test';

mongodb.MongoClient.connect(uri, function(error, db) {
  assert.ifError(error);

  var bucket = new mongodb.GridFSBucket(db);

  fs.createReadStream('./RainMood.mp3').
    pipe(bucket.openUploadStream('RainMood.mp3')).
    on('error', (error) => {
      assert.ifError(error);
    }).
    on('finish', () => {
      console.log('done!');
      process.exit(0);
    });
});
