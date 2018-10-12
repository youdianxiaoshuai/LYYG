
Page({
  data: {
    cloud: "",
    userInfo: {}
  },
  onLoad: function () {
    this.setData({
      cloud: getApp().cloud
    });
    wx.login({
      success: res => {
        wx.getUserInfo({
          success: res => {
            this.setData({
              userInfo: res.userInfo
            })
          }
        })
      }
    })
  },
  onPullDownRefresh: function () {
    console.log('下拉刷新...')
  }
})