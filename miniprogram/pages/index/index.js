// index/list.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    menu: ["吃的1", "吃的2", "吃的3", "吃的4"],
    inputShowed: false,
    inputVal: ""
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
