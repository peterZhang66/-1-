const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function leftTimer(year, month, day, hour, minute, second) {
  var leftTime = (new Date(year, month - 1, day, hour, minute, second)) - (new Date()); //计算剩余的毫秒数 
  var days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数 
  var hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时 
  var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟 
  var seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数 
  days = checkTime(days);
  hours = checkTime(hours);
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);
  // setInterval("leftTimer(2016,11,11,11,11,11)",1000);
  //  days + "天" + hours + "小时" + minutes + "分" + seconds + "秒"; 
  return {
    days, hours, minutes, seconds
  }
}
function checkTime(i) { //将0-9的数字前面加上0，例1变为01 
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
/**
   * 数据请求
   */
function getNetJson(url, params) {
    return new Promise(function(resolve,reject) {//Promise要大写
      wx.request({
        url,
        data:params,
        header: {
          'content-type':'json'//默认值
        },
        success:resolve,
        fail:reject
      });
    });
  };
/**
 * 数据缓存
  */
  function getStorage (key) {
    return new promise(function (resolve,reject) {
      wx.getStorage({
        key,
        success:resolve,
        fail:reject
      })
    })
  }
module.exports = {
  leftTimer,
  formatTime,
  getNetJson
}    