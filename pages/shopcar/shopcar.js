// pages/shopcar/shopcar.js
var app = getApp();
// console.log(app)
Page({
  /**
   * 页面的初始数据
   */
  data: {
    listData: [{ "shopName": "店铺1", "counts": 0, "heji": 0, "yunfei": 1000, "goods": [{ "goodName": "shangpin1", "img": "../img/imga.jpg", "guige": "1L", "shuxing": '食物油', "count": "3", "price": "30", "checked": true }, { "goodName": "shangpin2", "img": "../img/imga.jpg", "guige": "2L", "shuxing": '汽油', "count": "8", "price": "10000", "checked": true }] }, { "shopName": "店铺2", "heji": 0, "yunfei": 1000, "counts": 0, "goods": [{ "goodName": "shangpin1", "img": "../img/imga.jpg", "guige": "1L", "shuxing": '食物油', "count": "3", "price": "30", "checked": false }, { "goodName": "shangpin2", "img": "../img/imga.jpg", "guige": "2L", "shuxing": '汽油', "count": "8", "price": "10000", "checked": true }] }, { "shopName": "店铺2", "heji": 0, "yunfei": 1000, "counts": 0, "goods": [{ "goodName": "shangpin1", "img": "../img/imga.jpg", "guige": "1L", "shuxing": '食物油', "count": "3", "price": "30", "checked": false }, { "goodName": "shangpin2", "img": "../img/imga.jpg", "guige": "2L", "shuxing": '汽油', "count": "8", "price": "10000", "checked": true }] }, { "shopName": "店铺2", "heji": 0, "yunfei": 1000, "counts": 0, "goods": [{ "goodName": "shangpin1", "img": "../img/imga.jpg", "guige": "1L", "shuxing": '食物油', "count": "3", "price": "30", "checked": false }, { "goodName": "shangpin2", "img": "../img/imga.jpg", "guige": "2L", "shuxing": '汽油', "count": "8", "price": "10000", "checked": true }] }],
    total:0,
    isSelectAll:false,
    isShow:false
  },
   /**
   * 删除商品
   */
  
   /**
   * 减少商品数量
   */
  toReduce(e) {
    var bus = this.data.listData;
    bus.forEach(function (v,i) {
        var first = e.currentTarget.dataset.reducef;
        if (first == i){
             var second = e.currentTarget.dataset.reduces;
            v.goods.forEach((val,index) => {
              if ((second === index)) {
                    // 到1禁止
                    if (val.count <= 1) {
                      val.count = 1;
                    }else {
                      val.count --;
                    }
                }
            })
        }
    })
    this.setData({// 更新数据渲染视图
      listData: bus,
    })
    this.render()
  },
  /**
   * 添加商品数量
   */
  toAdd(e) {
    var bus = this.data.listData;
    bus.forEach(function (v, i) {
      var first = e.currentTarget.dataset.addf;
      if (first == i) {
        var second = e.currentTarget.dataset.adds;
        v.goods.forEach(function (val, index) {
          if (second === index) {
              val.count++;
          }
        })
      }
    }) 
    this.setData({// 更新数据渲染视图
      listData: bus
    })
    
    this.render()// 渲染页面
  },
  /**
   * 全选联动
   */
  checkboxChange(e) {//单个商品选中
    var bus = this.data.listData,index1=0,index2 = 0;
    var currentIndex = e.currentTarget.dataset.current;
    var isSelectAll = false;//初始化
    bus.forEach((v1,i1,a) => {
      v1.goods.forEach((v2, i2,atrr) => {
        index2 = a.length*atrr.length;
        if (currentIndex[0] == i1 && currentIndex[1] == i2) {
          v2.checked = !v2.checked;
        }
        if (v2.checked) { // 全都为true
          index1++;
          if (index1 == index2) {
            isSelectAll = true;
          } 
        }
        
      })
    })
    this.setData({
      listData:bus,
      isSelectAll
    })
    this.render()
  },
  selectAllChange() { // 是否勾选全选按钮
    var bus = this.data.listData;
    var isSelectAll = this.data.isSelectAll;
    isSelectAll = !isSelectAll;
      bus.forEach(function (v, i) {
          v.goods.forEach(function(val,i) {
            if (isSelectAll) {
              val.checked = true;
            }else{
              val.checked = false;
            }
              
          })
      })
    this.setData({
      listData:bus,
      isSelectAll
    }) 
    this.render();
  },
  onLoad: function (options) {
    this.render();
  },
   /**
   * 渲染页面函数
   */
 render() { 
   var bus = this.data.listData, total = 0;// 取出数据操作数据
   if (bus) {
     bus.forEach((v) => {
       var heji = 0, checkNumber = 0
       v.goods.forEach((val) => {
         if (val.checked == true) {
           heji += val.price * val.count;//合计
           v.heji = heji
           checkNumber++;// 选中几个
           v.counts = checkNumber;// 总共几件商品
         } else {
           heji += 0;
           v.heji = heji;
           v.counts = checkNumber
         }
       })
       if (checkNumber > 0) {// 有勾选加运费
         heji += v.yunfei
         v.heji = heji; //合计
         total += v.heji;// 总计
       }
     });
     this.setData({// 更新数据渲染视图
       listData: bus,
       total: total,
       isShow: false
     })
   } else {//无商品显示为空
     this.setData({
       isShow:true
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