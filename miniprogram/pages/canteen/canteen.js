Page({

  /**
   * 页面的初始数据
   */
  data: {
    downFlag:false
  },
  clickTogether:function(e){
    var flag = this.data.downFlag;
    console.log(flag)
    this.setData({downFlag:!flag});
    console.log(this.data.downFlag)
  },
  clickHot:function(e){
    this.setData({downFlag:false})
  },
  clickMost:function(e){
    this.setData({ downFlag: false })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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