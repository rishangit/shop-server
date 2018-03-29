const dbConnection = require('../common/project/db_connection');

module.exports = {
    saveData: function (param) {
        dbConnection.connect((dbo) => {
            dbo.collection("product_manufacture")
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
            dbo.collection("product_manufacture")
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
            dbo.collection("product_catagory").createIndex({"mfd": "text", "dis": "text" });
            queryObj = {}
            if (param.data.query != undefined && param.data.query != '') {
                queryObj = { $text: { $search: param.data.query, $caseSensitive: false } }
            }
            dbo.collection("product_catagory")
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