
module.exports = {
    sendFalse:function(pRes){
      pRes.header("Access-Control-Allow-Origin", "*");
      pRes.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      resObj = {};
      resObj.suc = false
      resObj.msg = '';
      pRes.send(resObj)
    },

    sendTrue:function(pRes){
      pRes.header("Access-Control-Allow-Origin", "*");
      pRes.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      resObj = {};
      resObj.suc = true;
      pRes.send(resObj)
    },
    
    sendTrueWithObj:function(pRes,pObj){
      pRes.header("Access-Control-Allow-Origin", "*");
      pRes.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      resObj = {};
      resObj.suc = true
      resObj.obj = pObj
      pRes.send(resObj)
    }
  }
