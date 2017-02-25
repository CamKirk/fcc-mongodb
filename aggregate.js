var mongo = require('mongodb').MongoClient;
var url= 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url,function(err,db){
   if(err) throw err;
   
   var collection=db.collection('prices');
   collection.aggregate([
       {$match:{'size':process.argv[2]}},
       {$group:{
           _id:'avg',
           avg:{$avg: '$price'}
           
       }}]).toArray(function(err,results){
           if(err) throw err;
           results=Number(results[0].avg).toFixed(2);
           console.log(results);
           db.close()
       });
    
});