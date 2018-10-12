// index/list.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    cloud: "",
    menu: ["吃的1", "吃的2", "吃的3", "吃的4"],
    inputShowed: false,
    inputVal: "",
    cloud:"",
    menuItem: [
      { src: "cloud://lyyg-e9073e.6c79-lyyg-e9073e/meishi.png", name: "美食", path: "/pages/canteen/canteen" }, { src: "cloud://lyyg-e9073e.6c79-lyyg-e9073e/yinpin.png", name: "饮品", path: "../canteen/canteen" }, { src: "cloud://lyyg-e9073e.6c79-lyyg-e9073e/shushi.png", name: "熟食", path: "../canteen/canteen" }, { src: "cloud://lyyg-e9073e.6c79-lyyg-e9073e/dizhi.png", name: "低脂食物" }, { src: "cloud://lyyg-e9073e.6c79-lyyg-e9073e/fenlei.png", name: "分类", path: "../canteen/canteen" }, { src: "cloud://lyyg-e9073e.6c79-lyyg-e9073e/kalulix.png", name: "卡路里排行", path: "../canteen/canteen" }, { src: "cloud://lyyg-e9073e.6c79-lyyg-e9073e/chongzhi.png", name: "充值中心", path: "../canteen/canteen" }, { src: "cloud://lyyg-e9073e.6c79-lyyg-e9073e/linghongbao.png", name: "领红包", path: "../canteen/canteen" }, { src: "cloud://lyyg-e9073e.6c79-lyyg-e9073e/bangmangdai.png", name: "帮忙带", path: "../canteen/canteen" }, { src: "cloud://lyyg-e9073e.6c79-lyyg-e9073e/zhinengtuijian.png", name: "智能推荐", path: "../canteen/canteen"}
    ]
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  bmd:function(e){
    wx.navigateTo({
      url: '../bmd/bmd',
    })
  },

 
 onLoad:function(){
   this.setData({
     cloud:getApp().cloud
   })
 },
  //加载数据
  getDataList:function(){
    //调用数据接口，获取数据
 
    
  }

  
 
})
