const dbConnection = require('../common/project/db_connection');

module.exports = {
    getData: function (param) {
        dbConnection.connect((dbo) => {
            var ObjectId = require('mongodb').ObjectId;
            console.log(param.data)
            dbo.collection("users")
                .findOne(param.data, (err, doc) => {
                    if (err)
                        param.error(err);
                    else
                        param.callBack(doc);
                })
        })
    }
}

//{ unm: 'n.rishee@gmail.com', pss: '12345' }