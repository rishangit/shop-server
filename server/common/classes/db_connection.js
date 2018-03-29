
const config = require('../const/config');
const mongoClient = require('mongodb').MongoClient
module.exports = {
    connect(callBack) {
        console.log("mongo connecttion");
        mongoClient.connect(config.dbUrl, function (err, db) {
            if (err) throw err;
            console.log("Connected successfully to server");
            var dbo = db.db("shop");
            callBack(dbo);
            console.log("mongo connecttion - closed");
            //dbo.close();
        })
    }

}