const Access = require('../data_access/login_access');
const SendResponse = require('../common/response');

module.exports = {
  login: function (req, res) {
    var data = req.body;
    var sendResponse = new SendResponse(res);
    Access.getData({
      data: data,
      callBack: (doc) => {
        console.log(doc)
        if (doc != null) { sendResponse.sendSuccessObj(doc) }
        else { sendResponse.sendSuccessEmpty() }
      },
      error: (err) => {
        sendResponse.sendError(err);
      }
    });
  }
}