// pages/list/list.js
let app = getApp();
let aa = [];//数据来源
Page({
      data: {
          list:[],
          isShow:false,
          filterList:[]
      },
      // 分类排序
        filter(e) {
          var type = e.currentTarget.dataset.type;
          var fixedData = this.data.list;
          var filterData = [];//筛选之后的数据，设置给this.data.list,因为函数封装所以提出来
          /*1.this.data.list是渲染数据的接口，是不固定的
          **2.aa是数据来源，不会变化
          **3.public是关键字，不能用做函数名
          */
          function public1(list, type) { 
            filterData = list.filter(function (v) {
              return v.type == type
            })
          };
          switch (type) {
            case '综合':
              //  public1(aa,type)
              break;
            case '销量':
              var [...aa2] = aa;
              console.log(aa2)
              aa2.sort(function (a,b) {
                console.log(a,b)
                return (a.beSold-b.beSold)
              })
              break;
            case '新品':
              // public1(aa, type)
              filterData = aa1;
              break;
            case '价格':
            var [...aa1] = aa;//浅拷贝，即使指针变了，操作数组，结构依然会变。
              for (var i=0;i<aa1.length;i++) {//从大到小排序(冒泡排序)
                for (var j=i+1;j<aa1.length;j++) {
                    if (aa1[i].price < aa1[j].price) {
                        var bus = {};
                        bus = aa1[i];
                        aa1[i] = aa1[j];
                        aa1[j] = bus;
                    }
                }
              }
              aa1.sort()
              filterData = aa1;
              break;
            case '全部':
            console.log(aa)
              filterData = aa;
              break;
            case '配件':
              public1(aa, type)
              break;
            case '礼品':
              public1(aa, type)
              break;
            case '吉他教材':
              public1(aa, type)
              break;
            case '钢琴教材':
              public1(aa, type)
              break;
          }
          this.setData({
            list: filterData
          })
        },
      onLoad: function (options) {
            // 更多数据
            if (options.all) {
               aa = options.all;
                aa = JSON.parse(aa);
            } else if (options.isThere2) {
               aa = options.isThere2;
              aa = JSON.parse(aa);
            } else if (options.newExclusive2) {
               aa = options.newExclusive2;
              aa = JSON.parse(aa);
            } else if (options.present2) {
               aa = options.present2;
              aa = JSON.parse(aa);
            }
            if (aa.length <= 0) {
              this.setData({
                isShow:true,
                list: aa
              })
            }else{
              this.setData({
                isShow: false,
                list: aa
              })
            }
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