// pages/list/list.js
let app = getApp();
Page({

      /**
       * 页面的初始数据
       */
      data: {
          list:[]
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
      onLoad: function (options) {
            // 初始化数据
            this.setData({
                list:app.goods
            })
            // 滚动视图
            wx.getSystemInfo({
                  success: res => {
                        this.setData({
                              windowWidth: res.windowWidth,
                              windowHeight: res.windowHeight
                        });
                  }
            });
            wx.createSelectorQuery().selectAll('.crea').fields({
                  dataset: true,
                  size: true,
                  scrollOffset: true,
            }, res => {
                  // console.log(res);
                  let ElemH =res[0].height+res[1].height;
                  // console.log(ElemH) 
                  this.setData({
                        ElemH,
                  });
            }).exec();
      }

})