//index.js
//获取应用实例
// const app = getApp();
let Time = require('../../utils/util');
// console.log(Time.formatTime())
Page({
  data: {
  show:"",
  days:'',
  hours: '',
  minutes: '',
  seconds: ''
  },
  onLoad: function () {
    
  // 倒计时
  this.TimeOut();
      setInterval(()=>{
            this.TimeOut();
      },1000);
  },
  // 点击扫码
  click: function () {
    console.log(this)
    var that = this;
    var show;
    wx.scanCode({
      success: (res) => {
        this.show = "--result:" + res.result + "--scanType:" + res.scanType + "--charSet:" + res.charSet + "--path:" + res.path;
        that.setData({
          show: this.show
        })
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      },
      complete: (res) => {
      }
    })
  },
//   倒计时
  TimeOut(){
        let TimeOut = Time.leftTimer(2018, 12, 28, 12, 12, 12);
        this.setData({
              days: TimeOut.days,
              hours: TimeOut.hours,
              minutes: TimeOut.minutes,
              seconds: TimeOut.seconds
        });
  }
 
})
