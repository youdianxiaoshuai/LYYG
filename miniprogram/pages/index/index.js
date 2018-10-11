// index/list.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    menu: ["吃的1", "吃的2", "吃的3", "吃的4"],
    inputShowed: false,
    inputVal: "",
    menuItem: [
      { src: "../../images/meishi.png", name: "美食" }, { src: "../../images/yinpin.png", name: "饮品" }, { src: "../../images/shushi.png", name: "熟食" }, { src: "../../images/dizhi.png", name: "低脂食物" }, { src: "../../images/fenlei.png", name: "分类" }, { src: "../../images/kaluli.png", name: "卡路里排行" }, { src: "../../images/chongzhi.png", name: "充值中心" }, { src: "../../images/linghongbao.png", name: "领红包" }, { src: "../../images/bangmangdai.png", name: "帮忙带" }, { src: "../../images/zhinengtuijian.png", name: "智能推荐" }
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
 
 
 
  //加载数据
  getDataList:function(){
    //调用数据接口，获取数据
 
    
  }

  
 
})
