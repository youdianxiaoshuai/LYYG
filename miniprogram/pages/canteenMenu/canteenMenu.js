var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({

  /**
   * 页面的初始数据
   */
  data: {
    price:0,
    countall:0,
    tabs: ["点餐", "评价", "食堂介绍"],
    leftMenu: ["自选荤菜", "自选素材", "盖浇饭", "小炒类", "熟食类", "饮品类"],
    menuItem: [
      { img: "../../images/caipin1.png", name: "干锅手撕包菜（500g）", price: 22,count:0 }, 
      { img: "../../images/caipin2.png", name: "外婆炖蛋（500g）", price: 19, count:0 },
      { img: "../../images/caipin3.png", name: "酸辣土豆丝（250g）", price: 16, count:0 }, 
      { img: "../../images/caipin4.png", name: "糖醋里脊（300g）", price: 32, count:0 },
      { img: "../../images/caipin1.png", name: "干锅手撕包菜（500g）", price: 22, count: 0},
      { img: "../../images/caipin2.png", name: "外婆炖蛋（500g）", price: 19, count: 0},
      { img: "../../images/caipin3.png", name: "酸辣土豆丝（250g）", price: 16, count: 0},
      { img: "../../images/caipin4.png", name: "糖醋里脊（300g）", price: 32, count: 0 }],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0
  },
  addCount:function(e){
    var id=parseInt(e.currentTarget.id);
    var count=this.data.menuItem[id].count+1;
    var x='menuItem['+id+'].count'
    console.log(count)
    this.setData({
      [x]:count
    })
    var res = this.data.countall + 1
    this.setData({
      countall:res
    })
    var money=this.data.price+this.data.menuItem[id].price;
    this.setData({
      price:money
    })
    
  },
  desCount:function(e){
    var id = parseInt(e.currentTarget.id);
    var count = this.data.menuItem[id].count - 1;
    
    var x = 'menuItem[' + id + '].count'
    console.log(count)
    this.setData({
      [x]: count
    })
    var res=this.data.countall-1
    if(res<0){res=0;}
    this.setData({
      countall: res
    })
    var money = this.data.price - this.data.menuItem[id].price;
    if(money<0){money=0;}
    this.setData({
      price: money
    })
  },
  submitMenu:function(e){
    var x=this.data.menuItem;
    var temp=[];
    for(var i=0;i<x.length;i++){
      if(x[i].count>0){
        temp.push(x[i]);
      }
    }
    var yuan = JSON.stringify({ total: this.data.price, items: temp });
    console.log(yuan)
    console.log("url:" + '../submitMenu/submitMenu?yuan=' + yuan)
    wx.navigateTo({
      url: '../submitMenu/submitMenu?yuan='+yuan
    })
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
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