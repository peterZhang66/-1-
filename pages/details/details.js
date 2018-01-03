// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [{ "goodName": "shangpin1", "img": "../img/imga.jpg", "guige": "1L", "shuxing": '食物油', "count": "3", "price": "30", "checked": true }, { "goodName": "shangpin2", "img": "../img/imga.jpg", "guige": "2L", "shuxing": '汽油', "count": "8", "price": "10000", "checked": true }],
    gong:0,
    heji:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.render()
  },
  render() {
    var bus = this.data.goods;
    var checkNum = 0;
    var heji = 0;
    bus.every(function (v,i) {
      if (v.checked) {
        checkNum++;
       checkNum;
        heji += v.price*v.count;
      }
      return true
    })
    this.setData({
      gong: checkNum,
      heji
    })
  },
  checkChange(e) {
    // console.log(e)
    var bus = this.data.goods;
    bus.forEach(function (v,i) {
      if (i == e.currentTarget.dataset.index) {
        v.checked = !v.checked
      }
    })
    this.setData({
      goods:bus
    })
    this.render()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})