var mongo=require('mongodb').MongoClient;
var url='mongodb://localhost:27017/learnyoumongo';

mongo.connect(url,function(err,db){
    if(err) throw err;
    
    var collection=db.collection('docs');
    collection.insert({firstName:process.argv[2], lastName:process.argv[3]},
        function(err,data){
            if(err)throw err;
            console.log(JSON.stringify({firstName:process.argv[2], lastName:process.argv[3]}));
             db.close();
            
        });
   
})