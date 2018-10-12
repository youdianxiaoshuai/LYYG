Page({

  /**
   * 页面的初始数据
   */
  data: {
    cloud: "",
    total1: 0,
    total2:0,
    orders: [
      { img: "cloud://lyyg-e9073e.6c79-lyyg-e9073e/caipin1.png", name: "干锅手撕包菜（500g）", price: 22, count: 1 },
      { img: "cloud://lyyg-e9073e.6c79-lyyg-e9073e/caipin2.png", name: "外婆炖蛋（500g）", price: 19, count: 2 },
      { img: "cloud://lyyg-e9073e.6c79-lyyg-e9073e/caipin3.png", name: "酸辣土豆丝（250g）", price: 16, count: 3 }],
    tabs: ["餐柜取餐","现在吃"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      cloud: getApp().cloud
    })
    var data = JSON.parse(options.yuan);
    this.setData({ total1: data["total"] + 2 })
    this.setData({ total2: data["total"] })
    this.setData({ orders: data["items"]})
        
    
    
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