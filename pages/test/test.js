
Page({
  data: {
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
    list: []
  },
  // 搜索
  completed(e) {
    // console.log(e.detail.value)
    var all = this.data.isThere2.concat(this.data.newExclusive2, this.data.present2)
    // console.log(all)
    var all = all.filter(function (v, i) {
      if (e.detail.value) {
        var change = e.detail.value.split('');
        for (var i = 0; i < change.length; i++) {
          return v.productName.indexOf(change[i]) != -1
        }
      }
    }.bind(this));
    JSON.stringify(all)
  },
  // 分类排序
  filter(e) {
    console.log(e.currentTarget.dataset.type)
    switch (e.currentTarget.dataset.type) {
      case '综合':
        console.log(1);
        break;
      case '销量':
        console.log(2);
        break;
      case '新品':
        console.log(3);
        break;
      case '价格':
        console.log(4);
        break;
      case '全部':
        console.log(5);
        break;
      case '配件':
        console.log(6);
        break;
      case '礼品':
        console.log(7);
        break;
      case '吉他教材':
        console.log(8);
        break;
      case '钢琴教材':
        console.log(9);
        break;
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    if (options.all) {
      var aa = options.all;
      aa = JSON.parse(aa);

    } else if (options.isThere2) {
      var aa = options.isThere2;
      aa = JSON.parse(aa);
    } else if (options.newExclusive2) {
      var aa = options.newExclusive2;
      aa = JSON.parse(aa);
    } else if (options.present2) {
      var aa = options.present2;
      aa = JSON.parse(aa);
    }
    this.setData({
      list: aa
    })

    // wx.getSystemInfo({
    //       success: res => {
    //             this.setData({
    //                   windowWidth: res.windowWidth,
    //                   windowHeight: res.windowHeight
    //             });
    //       }
    // });
    // wx.createSelectorQuery().selectAll('.crea').fields({
    //       dataset: true,
    //       size: true,
    //       scrollOffset: true,
    // }, res => {
    //       console.log(res);
    //       let ElemH =res[0].height+res[1].height;
    //       console.log(ElemH) 
    //       this.setData({
    //             ElemH,
    //       });
    // }).exec(); 
    var that = this;

    /** 
     * 获取系统信息 
     */
    // wx.getSystemInfo({

    //   success: function (res) {
    //     that.setData({
    //       winWidth: res.windowWidth,
    //       winHeight: res.windowHeight
    //     });
    //   }

    // }); 
  },
  /** 
* 滑动切换tab 
*/
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
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