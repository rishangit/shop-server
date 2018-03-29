const dbConnection = require('../common/project/db_connection');

module.exports = {
    
    saveData: function (param) {
        dbConnection.connect((dbo) => {
            dbo.collection("users")
                .insertOne(param.data, (err, doc) => {
                    if (err)
                        param.error(err);
                    else
                        param.callBack(doc);
                })
        })
    },

    getData: function (param) {
        dbConnection.connect((dbo) => {
            var ObjectId = require('mongodb').ObjectId;
            dbo.collection("users")
                .findOne({ _id: new ObjectId(param.data._id) }, (err, doc) => {
                    if (err)
                        param.error(err);
                    else
                        param.callBack(doc);
                })
        })
    },

    listData: function (param) {
        dbConnection.connect((dbo) => {
            dbo.collection("users").createIndex({ "fnm": "text", "lnm": "text", "unm": "text" });
            queryObj = {}
            if (param.data.query != undefined && param.data.query != '') {
                queryObj = { $text: { $search: param.data.query, $caseSensitive: false } }
            }
            dbo.collection("shops")
                .find(queryObj)
                .sort(param.data.sort).skip(param.data.limit * (param.data.page - 1))
                .limit(param.data.limit)
                .toArray(function (err, docs) {
                    if (err)
                        param.error(err);
                    else
                        param.callBack(docs);
                })
        })
    }
}