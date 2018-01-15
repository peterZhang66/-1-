//index.js
//获取应用实例
var app = getApp();
let Time = require('../../utils/util');
let API = require('../../utils/api.js')
let all = [];
Page({
  // 数据
    data: {
    show:"",
    days:'',
    hours: '',
    minutes: '',
    seconds: '',
    banner:[],
    isThere1:[],
    isThere2: [],
    newExclusive1:[],
    newExclusive2: [],
    present1:[],
    present2: [],
    search:''
    },
 //搜索
  completed(e) {
    // console.log(e.detail.value)
    all = this.data.isThere2.concat(this.data.newExclusive2, this.data.present2)
    // console.log(all)
    all = all.filter(function (v, i) {
      if (e.detail.value) {
        var change = e.detail.value.split('');
        for (var i = 0; i < change.length; i++) {
          return v.productName.indexOf(change[i]) != -1
        }
      }
    }.bind(this));
       wx.navigateTo({
         url: '../list/list?all=' + JSON.stringify(all)
       })
  },                                                                                                                                      
  // 跳转页面
  toMore(e) {
    var type = e.target.dataset.type;
    // console.log(type)
    wx.navigateTo({
      url: '../list/list?' + type + '=' + JSON.stringify(this.data[type])
    })
  },
  onLoad: function () {
  // 数据请求
    API.ajax('/index/banner',function (res) {
      this.setData({
        banner:res
      })
    }.bind(this));
    API.ajax('/index/isThere', function (res) {
      var res2 = JSON.parse(JSON.stringify(res));
      var res1 = res.splice(0,3);
      
      this.setData({
        isThere1: res1,
        isThere2: res2
      })
    }.bind(this));
    API.ajax('/index/newExclusive', function (res) {
      var res2 = JSON.parse(JSON.stringify(res));
      var res1 = res.splice(0, 3);
        
      this.setData({
        newExclusive1: res1,
        newExclusive2: res2
      })
    }.bind(this));
    API.ajax('/index/present', function (res) {
      var res2 = JSON.parse(JSON.stringify(res));
      var res1 = res.splice(0, 3);
       
      this.setData({
        present1: res1,
        present2: res2
      })
    }.bind(this));
  // 全局商品
    all = this.data.isThere2.concat(this.data.newExclusive2, this.data.present2)
    if (all.length > 0) {
      app.goods = all;
    }
// 倒计时
  this.TimeOut();
      setInterval(()=>{
            this.TimeOut();
      },1000);
  },
  TimeOut() {
    let TimeOut = Time.leftTimer(2018, 12, 28, 12, 12, 12);
    this.setData({
      days: TimeOut.days,
      hours: TimeOut.hours,
      minutes: TimeOut.minutes,
      seconds: TimeOut.seconds
    });
  },
// 点击扫码
  click: function () {
    // console.log(this)
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
  }
})
