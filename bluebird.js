var Promise = require('bluebird');

var mongoClient = Promise.promisifyAll(require('mongodb')).MongoClient;

var url = 'mongodb://localhost:27017';

mongoClient.connectAsync(url)
.then(function (database){
    return database.db('admin').collection('Employee').findAsync({})
})
.then(function(cursor){
    cursor.each(function (err, doc){
        console.log(doc);
    })
    
});