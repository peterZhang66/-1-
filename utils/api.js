// ******************************************服务器**************************************
let API_HOST = "https://api.douban.com";//域名
let DEBUG = true;//切换数据入口
var Data = require('data.js');
function ajax(url,fn, params) {
  if (!DEBUG) {//正式环境
    wx.request({
      url: API_HOST + url,
      data: params,
      header:{ "Content-Type": "application/json" },
      success: function (res) {
        fn(res);
      }
    });
  } else {//测试环境
    if (url == '/index/present') {//积分专区
      // 模拟数据
      var res = Data.present
    }else if (url == '/index/banner') {
      var res = Data.banner
    } else if (url == '/index/isThere') {
      var res = Data.isThere
    } else if (url == '/index/newExclusive') {//新人专享
      var res = Data.newExclusive
      // console.log(res)
    }
    fn(res)
  }
};
module.exports = {
  ajax,
}