const dbConnection = require('../common/project/db_connection');

module.exports = {

    saveData: function (param) {
        dbConnection.connect((dbo) => {
            dbo.collection("live_stock")
                .insertOne(param.data, (err, doc) => {
                    if (err)
                        param.error(err);
                    else
                        param.callBack(doc);
                })
        })
    },

    listData: function (param) {
        dbConnection.connect((dbo) => {
            dbo.collection("live_stock").createIndex({ location: "2d" });
            queryObj = {}
            if (param.data.query != undefined && param.data.query != '') {
                queryObj = {
                    "location": { "$geoWithin": { "$center": [[param.data.location.coordinates[0], param.data.location.coordinates[1]], 5000] } },
                    "$text": { "$search": param.data.query }
                }
            }
            dbo.collection("live_stock")
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