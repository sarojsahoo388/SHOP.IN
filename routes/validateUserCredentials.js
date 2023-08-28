var express = require('express');
const {MongoClient} = require("mongodb");

var mongoClient = new MongoClient("mongodb://127.0.0.1:27017");
var router = express.Router();
var userData;

router.post('/',(req, res) => {
   userData = req.body.params;
   getDbConnection().then((results) => {
    // console.log(results.length);
    
     var data = {};
   
     if(results.length) {
       data.msg = 'Valid User';
     }else{
       data.msg = 'Invalid User'
     }
   


  data = JSON.stringify(data);
  res.send(data);
}).catch((error) =>{
  console.log("error");
  console.log(error);
});

});

async function getDbConnection(data) {
  await mongoClient.connect ();
  var db = mongoClient.db("SHOPIN");
  var collection = db.collection ("userIdAndPassword");
  var userIdAndPassword  = collection.find({account_id : userData.userId}).toArray();
  return  userIdAndPassword;
}

module.exports = router;
