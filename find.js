var mongo = require('mongodb').MongoClient;
var url= 'mongodb://localhost:27017/learnyoumongo';
mongo.connect(url, function(err,db){
    var collection = db.collection('parrots');
    collection.find(
        {'age':{$gt:+process.argv[2]}
        
    }).toArray(function(err,docs){
        if(err){console.log('error');db.close();}
        console.log(docs);
        db.close();    
    });
    
})